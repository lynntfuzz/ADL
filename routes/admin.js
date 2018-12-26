var express = require('express');
var router = express.Router();

var admin_controller = require('../controllers/admin_controller');

router.get('/all_contacts',  admin_controller.all_contacts);

router.get('/',  admin_controller.index);

module.exports = router;