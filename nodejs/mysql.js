const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM topic", function (error, results, fields) {
  console.log(error);
  console.log(results);
});

connection.end();
