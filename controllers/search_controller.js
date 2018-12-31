var db  = require('../models');
var moment = require('moment');

exports.saveSearch = function(req, res) {
  var search_object = req.body;
  search_object.user_id = 1; // this is incomplete, I had intended
  // for us to save the searches for a particular user, but we don't have
  // a way for users to register (except for admin). Could we save the 
  // ip address of the user?

  db.Search.create(req.body).then(function(dbSearch) {
    res.json(dbSearch);
  }).catch(function (err) {
    console.log(err);
  });
};

