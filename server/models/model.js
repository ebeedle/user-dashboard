const db = require('../db');

const find = (model, params={}) => {
  return new Promise(
    function(resolve, reject) {
      model.find(params, (err, items) => {
        if (err) {
          reject(err)
        } else {
          resolve(items);
        }
      })
    }
  )
}

class Models {
  constructor(model) {
    this.model = db[model];
  }

  getAll() {
    return find(this.model);
  }

  get(params) {
    return find(this.model, params);
  }

  create(params) {
    const doc = new this.model(params);
    return new Promise(
      function(resolve, reject) {
        doc.save(function (err, doc) {
        console.log('saving')
          if (err) reject(err);
          else {
            resolve(doc);
          }
        });
      }
    )
  }

  update(identifier, params) {
    return new Promise(
      function(resolve, reject) {
        let query = identifier;
        let newData = params;
        this.model.findOneAndUpdate(query, newData, function(err, doc) {
          if (err) {
            return reject(err)
          } else {
            console.log('found')
            return resolve(doc)
          }
        })
      }.bind(this)
    )
  }
}

module.exports = Models;

// module.exports.create({email: 'bob@gmail.com', firstName: 'bob'})
// .then(x => console.log('x :', x))
// .catch(e => console.log('e :', e))

// Users.create({email: 't@gdfdffdmail.com'})
// .then(x => console.log('x :', x))
// .catch(e => console.log('e :', e))

// Users.getAll()
// .then(x => console.log('x :', x))

//   get(options) {
//     let parsedOptions = parseData(options);
//     let queryString = `SELECT * FROM ${this.tablename} WHERE ${parsedOptions.string.join(' AND ')}`;
//     return executeQuery(queryString, parsedOptions.values).spread(results => results);
//   }

//   create(options) {
//     let queryString = `INSERT INTO ${this.tablename} SET ?`;
//     return executeQuery(queryString, options);
//   }

//   update(options, values) {
//     let parsedOptions = parseData(options);
//     let queryString = `UPDATE ${this.tablename} SET ? WHERE ${parsedOptions.string.join(' AND ')}`;
//     return executeQuery(queryString, Array.prototype.concat(values, parsedOptions.values));
//   }

//   delete(options) {
//     let parsedOptions = parseData(options);
//     let queryString = `DELETE FROM ${this.tablename} WHERE ${parsedOptions.string.join(' AND ')}`;
//     return executeQuery(queryString, parsedOptions.values);
//   }

//   deleteAll() {
//     let queryString = `TRUNCATE TABLE ${this.tablename}`;
//     return executeQuery(queryString);
//   }
// }

// module.exports = Model;

// // let users = new module.exports('users');

// // users.getAll()
// // .then(x => console.log('x :', x))