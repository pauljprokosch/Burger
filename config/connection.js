var mysql = require ("mysql");
var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "Island99$",
	database: "burgers_db"
});
connection.connect (function(error) {
	if (err) {
			console.error("error connecting: " + err.stack);
			return;
		}
		console.log("connected as id " + connection.threadId);
});
module.exports = connection;