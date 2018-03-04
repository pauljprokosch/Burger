var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static('public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var routes = require("./controllers/burgersController");
app.use(routes);
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  })