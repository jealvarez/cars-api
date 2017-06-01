'use strict';

const MongoClient = require('mongodb').MongoClient;
const configuration = require('config');
const databaseConfiguration = configuration.get('Cars.databaseConfiguration');

var _database;

module.exports = {
  connect: (done) => {
    MongoClient.connect('mongodb://' +
      databaseConfiguration.user + ':' + databaseConfiguration.password +
      '@' + databaseConfiguration.host + ':' + databaseConfiguration.port +
      '/' + databaseConfiguration.database,
      function (error, database) {
        if (error)
          throw error;

        _database = database;
        console.log("Successfully connection to MongoDB");
        done();
      });
  },

  get: () => {
    return _database;
  }
};
