// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require('../models')

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

        db.Employees.findAll({}).then(function(data) {

            console.log("your data \n",data);
            res.render("partials/dashboard", { Employees: data });
        });
    });

    app.get('/team', function(req, res) {
        res.render('partials/team');
    });

    app.get('/add-employee', function(req, res) {
        res.render('partials/add-employee');
    });

};

