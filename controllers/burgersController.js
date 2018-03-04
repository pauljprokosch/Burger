var express = require("express");
var burger = require ("../models/burger.js");
var router = express.Router();

router.get ("/", function(req,res){
	console.log("verify router.get function")
})
module.exports=router;
