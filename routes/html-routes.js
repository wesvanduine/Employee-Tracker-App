// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/contact', function(req, res) {
        res.render('partials/contact')
    });

    app.get('/dashboard', function(req, res) {
        res.render('partials/dashboard');
    });

    app.get('/team', function(req, res) {
        res.render('partials/team');
    });

};

