var mongoose = require('mongoose');
let user = process.env.USER;
let password = process.env.PASSWORD;

// const MONGOLAB_URI = `mongodb://${user}:${password}@ds159776.mlab.com:59776/userdashboard`;
// const dburl = 'mongodb://127.0.0.1/3000/UserDashboard';
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

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