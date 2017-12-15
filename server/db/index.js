const createTables = require('./config.js');
const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'UserDashboard';


const connection = mysql.createConnection({
  user: 'root', 
  password: '', 
  database: database
})

// const populateCourses = require('./seedCourses.js')

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db))
  .catch(err => console.log(err)) 

module.exports = db;