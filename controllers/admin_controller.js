var db  = require('../models');

// exports.index = function(req, res) {
//   console.log("admin_controller.index");
//   res.render('login/login',{
//     layout: 'admin'
//  })
// };

exports.index = function(req, res) {
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

exports.all_contacts = function(req, res) {
    console.log("admin_controller.all_contacts");
    //res.render('contacts/contacts');
  db.Contact.findAll({
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