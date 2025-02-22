var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (prosses.env.CONSOLE_DEBUG){
    console.log("debugging enabled");
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
