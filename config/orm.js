var connection = require ("./connection.js");
var orm = {
//	selectAll: function(); 
 	insertOne: function (burgerName,table){
 		var queryString = "INSERT INTO ?? VALUES ??";
 		connection.query(queryString, [table, burgerName], function(err,result) {
 		  if (err) throw err;
      	  console.log(result);	
 		});
 	},

  //Determine which table, which burger and what to change
 	  updateOne: function (table,devoured,property,burgerName){
    var queryString = "UPDATE ?? SET ?? = TRUE WHERE ?? = ?";
    var querstring = 
    connection.query(queryString, [table,devoured,property,burgerName], function(err,result) {
      if (err) throw err;
          console.log(result);  
    })
  }
};
module.exports = orm;








/*
//Reference

INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', FALSE);





var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};*/
