var path = require("path");
var express = require("express");
var app = express();
var friends = require('../data/friends.js');
var htmlRoutes = require("./htmlRoutes.js");
var router = express.Router();

//module.exports = function(app){
	
	router.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	router.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	router.get('api/friends', function(req, res){
		res.sendFile(path.join(__dirname, '../data/friends.js'));
	});
// router.get('/friends', function(req, res){
// 	res.sendFile(path.join(__dirname, '../data/friends.js'))
// })




module.exports = router;