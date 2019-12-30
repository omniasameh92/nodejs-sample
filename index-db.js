var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myapp",
  password: "mysecurepass"
});



con.connect(function(err) {
  if (err)  console.log("ERROR");
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err)  console.log("ERROR");
    console.log("Database created");
  });
});

