var express = require('express');
var router = express.Router();

var contacts_controller = require('../controllers/contacts_controller');

router.get('/contacts',  contacts_controller.index);

/* Post new contact. */
router.post('/', contacts_controller.createContact);


module.exports = router;