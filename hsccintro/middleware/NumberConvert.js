module.exports={

//Create decimal to binary conversion function
ConvertDecToBin:function(decimal){
if (process.env.CONSOLE_DEBUG=="true"){
    console.log(decimal)
}//End if console.debuging
var runningdec=decimal;
var binstring='';


while (runningdec <0){
var newBit= running % 2
binstring=newBit.toString()+binstring
runningdec = Math.floor(runningdec/2);
}//End while loop
return binstring;

} // End ConverDecToBin function




} //End module.expqrts