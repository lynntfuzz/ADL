var express = require('express');

var router = express.Router();

var search_controller = require('../controllers/search_controller');

/* Post new search. */

router.post('/', function (req, res){
    console.log("post " + req.path);
    search_controller.saveSearch(req, res);
});
//router.post('/', search_controller.saveSearch);

module.exports = router;