let Model = require('./model.js');


class Users extends Model {
  constructor() {
    super('User');
  }

  alterUserKeys(info) {
    let correctedUserInfo = {};
    let newKey;
    for (var key in info) {
      newKey = key.split('');
      newKey[0] = key[0].toUpperCase();
      newKey = newKey.join('');
      correctedUserInfo[newKey] = info[key];
    }
    return correctedUserInfo;
  }

  signUp(info) {
    return this.create(info)
  }

  getUsers() {
    return new Promise(
      function(resolve, reject) {
        this.getAll()
        .then(info => {
          let shortenedUsersInfo = [];
          for (let i = 0; i < info.length; i++) {
            let userInfo = info[i];
            let shortenedUserInfo = {
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              email: userInfo.email
            }
            shortenedUsersInfo.push(shortenedUserInfo)
          }
          resolve(shortenedUsersInfo);
        })
        .catch(e => console.log('e :', e))
      }.bind(this)
    )
  }
}

module.exports = new Users();

// let ident = {email: 'changed email'}
// let params = {email: 'bob.com@gmail', firstName: 'bobby', lastName: 'baddles'}

// module.exports.update(ident, params)
// .then(x => console.log('x :'))
// .catch(e => console.log('e :', e))
// let info = {
//   email: 'bill.beedle2@gmail.com',
//   firstName : 'Bill',
//   lastName: 'Beedle',
//   description: 'UCLA Grad, software engineer',
// }

// module.exports.getUsers()
// .then(x => console.log('x :', x))

// module.exports.create()
// let info = {
//   email: 'b',
//   password: 'p',
//   firstName : 'bill',
//   lastName: 'beedle',
//   description: 'df',
//   imageUrl: 'kdf'
// }
// .then(x => console.log('x :', x))