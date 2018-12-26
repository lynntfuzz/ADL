var db  = require('../models');

exports.index = function(req, res) {
    console.log("contacts_controller.index");
    db.Contact.findAll({ order: [['createdAt', 'DESC']]}).then(function(dbContacts) {
      
      res.render('contacts/all_contacts', {
        layout: 'admin',
        contact: dbContacts
      });
    });
};

exports.createContact = function(req, res) {

  db.Contact.create(req.body).then(function(dbContact) {
    res.json(dbContact);
  });
};

