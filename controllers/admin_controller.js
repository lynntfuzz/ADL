var db  = require('../models');

exports.index = function(req, res) {
  console.log("admin_controller.index");
  res.render('login/login',{
    layout: 'admin'
 })
};

exports.all_contacts = function(req, res) {
    console.log("admin_controller.all_contacts");
    //res.render('contacts/contacts');
  db.Contact.findAll({
  }).then(function(dbContacts) {
    console.log(dbContacts);
    res.render('contacts/all_contacts', {
       layout: 'admin',
       contact: dbContacts
    });
  });
};