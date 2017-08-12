// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
// var mysql = require('mysql');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Authentication Packages
var session = require('express-session');
var passport = require('passport');
// var MySQLStore = require('express-mysql-session')(session);
// initalize sequelize with session store
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var sequelize = new db.Sequelize(
"ETRAC",
"root",
"raptor22", {
    "dialect": "mysql",
    "storage": "./session.mysql"
});

var myStore = new SequelizeStore({
    db: sequelize
});

app.use(cookieParser());  // Possibly not needed for session
app.use(session({
  // key: 'session_cookie_name',
  secret: 'uefewehfybjboi', // could use random string generator
  // store: myStore,
  resave: false,
  saveUninitialized: false, // Only creates cookie for logged in user
  // cookie: { secure: true}  // Only use if using HTTPS
}));

myStore.sync();

app.use(passport.initialize());
app.use(passport.session());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ /* force: true */ }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});