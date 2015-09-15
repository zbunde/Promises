var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var User = require('../models/user.js');

router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (result) { res.json(result) })
    .catch(function (err) {res.send(err) })
    .done();
});

//// Write the rest of this Crud app using promises instead of callbacks.


module.exports = router;
