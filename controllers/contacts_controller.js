var db  = require('../models');

exports.index = function(req, res) {
    console.log("contacts_controller.index");
    db.Contact.findAll({ order: [['createdAt', 'DESC']]
      }).then(function(dbContacts) {
        db.Search.findAll({}).then(function(dbSearch){
          res.render('admin-portal', {
            layout: 'admin',
            contact: dbContacts,
            search: dbSearch
          });
        });
      });
    
};

exports.createContact = function(req, res) {

  db.Contact.create(req.body).then(function(dbContact) {
    res.json(dbContact);
  });
};

