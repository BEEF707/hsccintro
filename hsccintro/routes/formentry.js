var express = require('express');
var router = express.Router();

const Coverter=require("../middleware/NumberConvert");

/* GET formentry page. */
router.get('/', function(req, res, next) {
  res.render('formentry', { title: 'Sample Form Entry' });
});

// POST formentry form
router.post('/', function(req, res, next) {
    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    let email=req.body.email1;
    let num1=req.body.num1;
    let num2=req.body.num2;
    let usersum=Number(num1)+Number(num2);


if (proces.env.CONSOLE_DEBUG=="TRUE")
console.log(req.numconvert1);
console.log(req.numconvert2);
confirm.log(num1); // display num1
console.log(converter.converterdecTobin(num1)) //display binary conversion
    res.render('formresults', {
      title: 'Sample Form Results',
    }//end debugging code

    
      fn:firstname,
      ln:lastname,
      em:email,
      total:usersum
    });
  });
  
  module.exports = router;