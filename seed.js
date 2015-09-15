var mongoose = require('mongoose');
var User = require('./server/models/user.js')
var Faker = require('faker2')

function databaseSeed() {
  User.find({}, function(err, documents){
    if(!err && documents.length < 10) {
      for (var i = 0; i < 500; i++) {
        var name = Faker.Internet.userName();
        var user = new User({username: name});
        user.save(function(err, success){
          if(!err) {
            console.log(
              'database seeded object!'
            );
          }
        })
      }
    }
  });

}

module.exports = databaseSeed;
