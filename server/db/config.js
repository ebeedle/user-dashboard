const Promise = require('bluebird');

module.exports = (db) => {
  console.log('createing tables')
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }

  // Create users table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS users (
      ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      FirstName VARCHAR(20),
      LastName VARCHAR(20),
      Description VARCHAR(1000),
      Picture VARCHAR(1000)
    );`
  )
}