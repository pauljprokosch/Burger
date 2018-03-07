var orm = require ('../config/orm.js');
var path = require ("path");
// When the page loads, grab and display all of the burgers


// When user selects the submit button
$("#submit-button").on("click", function(event) {
 
  event.preventDefault();
   
 //This is our method for temporarily storing the burger information
   var newBurger = {
  	burgerName:  $("#burger-name-input").val().trim()
  };
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)


    // On success, run the following code
    .then(function() {
     //creating html elements for the data that the user submitted
      var row = $("<div>");
      row.addClass("burger");
      row.append("<p>" + newBurger.burgerName + "</p>");
      row.append("<button id= devour-button>Devour!</button>");
  	//using jquery to send our newly created burger to the devour section of our web page
      $("#devour").append(row);
     //Insert a new burger into the burger table
	  orm.insertOne(newBurger.burgerName,burgers);
    });

  // Empty each input box by replacing the value with an empty string
  $("#burger-name-input").val("");
});

