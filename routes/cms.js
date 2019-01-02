var express = require('express');
var router  = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb ) {
        cb(null, 'public/Assets/img/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
    
});

const upload = multer({storage: storage});


var passport = require("../config/passport");
var cms_controller = require('../controllers/cms_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/showcase', cms_controller.findShowcase);


router.put('/showcase', upload.single('file'), cms_controller.updateShowcase);

module.exports = router;