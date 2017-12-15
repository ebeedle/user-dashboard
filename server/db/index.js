var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/3000/UserDashboard');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('working!!!!! db connected')
})

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  salt : String,
  firstName : String,
  lastName: String,
  description: String,
  imageUrl: String
});

var User = mongoose.model('User', userSchema);

// User.remove({}, function (err) {
//   if (err) return handleError(err);
//   // removed!
// });



module.exports.User = User;