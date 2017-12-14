// var mysql = require('mysql');
// var request = require('request');
var expect = require('chai').expect;
// var app = require('../server/app.js');
// var db = require('../server/db/index.js');
// var Promise = require('bluebird');
// var port = 4000;

    // var clearDB = (tableNames, db, callback) => {
    //   for (var i = 0; i < tableNames.length; i++) {
    //     var query = `truncate table ${tableNames[i]}`;
    //     db.query(query, (err, data) => {
    //       if (err) {
    //         return callback(err, null)
    //       }
    //       callback(null, data);
    //     })
    //   }
    // }


describe('', () => {
  var db;
  var server;
  beforeEach(done => {
    console.log('before')
  });

  afterEach(() => {
    console.log('after');
  });

  describe('testing works', () => {
    it('should retrun true if testing is working', done => {
      let results = [3, 3];
      expect(results).to.be.a('array');
      return done();
    })
  })  
})