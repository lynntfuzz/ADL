var db  = require('../models');

exports.index = function(req, res) {
    console.log("contacts_controller.index");
    res.render('contacts/contacts');
//   db.Contact.findAll({
//   }).then(function(dbContact) {
//     console.log(dbContact);
//     // res.render('contacts', {
//     //   layout: 'main-contacts',
//     //   contact: dbContact
//     // });
//   });
};

exports.createContact = function(req, res) {

  console.log(req.body);

  db.Contact.create(req.body).then(function(dbContact) {
    res.json(dbContact);
  });
};

