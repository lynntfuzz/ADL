var express = require('express');
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();

var contacts_controller = require('../controllers/contacts_controller');

router.get('/contacts', isAuthenticated, contacts_controller.index);

router.get('/form', function(req, res, next) {
    res.render('contacts/contacts');
  });

/* Post new contact. */
router.post('/', contacts_controller.createContact);


module.exports = router;