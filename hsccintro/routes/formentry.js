var express = require('express');
var router = express.Router();

const Converter=require("../middleware/NumberConvert");

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
  let binchoice=req.body.numcovert1;
  // If the binary checkbox is checked, call the converter function
  if (binchoice=="bin"){
    var binresult1=Converter.ConvertDecToBin(num1)
    var binresult2=Converter.ConvertDecToBin(num2)
    
  }//if bin


  // If the binary checkbox is not checked, set the binary values to a dummy value
  else{
    var binresult1='NO'
    var binresult2='NO'
  }//else
  
  

  //Display checkbox results
  if (process.env.CONSOLE_DEBUG=="true") {
    console.log(req.body.numconvert1);
    console.log(req.body.numconvert2);
    console.log(num1);  // display num1
    console.log(binresult1) //display binary conversion
  } // End debugging code

  res.render('formresults', {
    title: 'Sample Form Results',
    fn:firstname,
    ln:lastname,
    em:email,
    total:usersum,
    displaybin:binchoice,
    binnum1:binresult1,
    binnum2:binresult2
  });
});

module.exports = router;