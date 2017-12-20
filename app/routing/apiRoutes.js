var friends = require('../data/friends.js');
var express = require('express');
var router = express.Router();
var friends = require('../data/friends.js');
//var app = express();



  router.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  router.post('/api/friends', function(req, res){
  	//enter best match funtionality here - loop through friends 
//   	var myNumber = ['1', '1', '6'];
// var friendNumber = ['3', '3', '3'];
// var dif =[];

// for (var i = 0; i < myNumber.length; i++) {
//     console.log(myNumber[i]);
  
//  for (var j = 0; j < friendNumber.length; j++) {
//        dif =+ Math.abs(parseInt(myNumber[i]) - parseInt(friendNumber[i]));
//     console.log(dif);
    
//                 }
//     }
var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

  
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;

    // Use a for loop in a for loop to go through friends and scores
    for (var i = 0; i < friends.length; i++) {

      //console.log(friends[i].name);
      totalDifference = 0;

     
      for (var j = 0; j < friends[i].scores[j]; j++) {

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If less than current, replace as new bestMatch
        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // save the user's data to the database 
    friends.push(userData);

  
    res.json(bestMatch);
    });






   // console.log(friends);


module.exports = router;
//how do i export the bestMatch?