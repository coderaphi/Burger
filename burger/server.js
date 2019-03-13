var express = require ('express');
var orm = require("./db/config/orm.js");
var exphbs = require("express-handlebars");
const Handlebars = require('handlebars');


var app = express();
var PORT = process.env.PORT || 3070;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static('./views'));

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlroutes")(app);

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");
  

  

module.exports = app;