var friends = require('../data/friends.js');
var express = require('express');
var router = express.Router();
//var app = express();


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  router.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  router.post('/api/friends', function(req, res){
  	//enter best match funtionality here - loop through friends 
  })


   // console.log(friends);


module.exports = router;