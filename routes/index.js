var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET /");
  res.render('index', { title: 'The Real Estate World' });
});

module.exports = router;
