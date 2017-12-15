const express = require('express');
const app = express();
const db = require('./db/index.js')
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
// const Strategy = require('passport-local').Strategy;
const models = require('./models');
// require('./db/models');


// passport.use(new Strategy(
//     function(username, password, cb) {
//       models.users.get({email: username})
//       .then(users => {
//         if (!users.length) {
//           cb(null, false)
//         }
//         var user = users[0];
//         if (!utils.compareHash(password, user.password, user.salt)) {
//           return cb(null, false);
//         }
//         return cb(null, {id: user.id})
//       })
//       .catch(err => {
//         return cb(err);
//       })
//     }
//   ));

// passport.serializeUser(function(user, cb) {
//     console.log('SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING SERIALISING')
//     cb(null, user.id);
//   });

//   passport.deserializeUser(function(id, cb) {
//   console.log(`DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING DESERIALIZING`);
//   //get user info by id and then call it back as second argument

//   models2.users.get({id: id})
//     .then(userInfo => {
//       cb(null, userInfo[0])
//     })
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// app.use(passport.initialize());

// app.use(passport.session());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

module.exports = app;