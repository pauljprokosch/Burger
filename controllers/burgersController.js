var express = require("express");
var router = express.Router();

router.get ("/", function(req,res){
	console.log("verify router.get function")
})
module.exports=router;