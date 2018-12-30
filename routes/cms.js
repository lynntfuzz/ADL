var express = require('express');
var router  = express.Router();

const multer = require('multer');

const upload = multer({dest: 'public/Assets/img/'});

var passport = require("../config/passport");
var cms_controller = require('../controllers/cms_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/showcase', cms_controller.findShowcase);


router.post('/showcase', upload.single('image_file'), cms_controller.updateShowcase);

module.exports = router;