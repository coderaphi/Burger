var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "burgerdatabase",
  port: 3306
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("==> 🌎  Listening on port %s. Visit http://localhost/3306 in your browser.");
  });
  
  module.exports = connection;
  