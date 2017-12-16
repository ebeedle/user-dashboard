const path = require('path');
const models = require('../models');

module.exports.getPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
};

module.exports.signUp = (req, res) => {
  models.users.signUp(req.body)
  .then(() => {
    res.redirect('/login')
  })
  .catch(() => {
    res.send('error')
  })
}

module.exports.getUserInfo = (req, res) => {
  // console.log('req.body email :', req.query)

  // let id = 1;
  models.users.get({email: req.query.email})
  .then(info => {
    // console.log('info :', info)
    // let userInfo = {
    //   firstName : info[0].firstName,
    //   lastName: info[0].lastName,
    //   description: info[0].description,
    //   imageUrl: info[0].imageUrl
    // }
    res.send(info[0])
  }) 
  .catch(e => console.log('error!!! :', e))
}

module.exports.editInfo = (req, res) => {
  console.log('edign info');
  let editedInfo = req.body;
  models.users.update({email: editedInfo.email}, editedInfo)
  .then(x => res.send('ji'))
  .catch(e => console.log('error'))
}

module.exports.getAllUsers = (req, res) => {
  console.log('getting all users ')
  models.users.getAll()
  .then(users => {
    // console.log('users :', users)
    res.send(users);
  })
  .catch(err => console.log(err))
}

// module.exports.getUserInfo2 = (req, res) => {
//   console.log('req.body email :', req.query)


//   // let id = 1;
//   models.users.get({email: req.body.email})
//   .then(info => {
//     console.log('info :', info)

//     res.send(info)
//   }) 
//   .catch(e => console.log('error!!! :', e))
// }



