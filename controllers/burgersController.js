var express = require("express");
var burger = require ("../models/burger.js");
var router = express.Router();

router.get ("/index", function(req,res){
	res.render("index",{burger:data});
})
module.exports=router;
