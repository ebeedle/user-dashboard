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
}

module.exports = new Users();

// let info = {
//   email: 'bill.beedle2@gmail.com',
//   firstName : 'Bill',
//   lastName: 'Beedle',
//   description: 'UCLA Grad, software engineer',
// }

module.exports.getAll()
.then(x => console.log('x :', x))

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