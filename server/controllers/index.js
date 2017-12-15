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
  // let id = 1;
  models.users.getAll()
  .then(info => {
    let userInfo = {
      firstName : info[0].firstName,
      lastName: info[0].lastName,
      description: info[0].description,
      imageUrl: info[0].imageUrl
    }
    res.send(userInfo)
  }) 
  .catch(e => console.log('error!!! :', e))
}



