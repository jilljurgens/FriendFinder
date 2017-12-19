var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var apiRouter = require('./app/routing/apiRoutes.js');
var htmlRouter = require('./app/routing/htmlRoutes.js');
//var friendList = require('.app/data/friends.js');
var app = express();
var PORT = 3000;
//var htmlRoutes = require("./htmlRoutes.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(htmlRouter);
app.use(apiRouter);



app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
});