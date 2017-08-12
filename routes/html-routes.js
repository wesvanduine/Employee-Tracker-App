// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const db = require('../models')
const passport = require('passport');

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // Points to Login page
    app.get('/', function(req, res) {
        res.render('index');
    });

    // Dashboard page (currently not being used)
    app.get('/dashboard', function(req, res) {

        db.Employees.findAll({}).then(function(data) {
            console.log("Redirect to dashboard succesful");
            // console.log('User: ' + req.user);
            // console.log('Authenticated: ' + req.isAuthenticated());
            res.render("partials/dashboard", { Employees: data });
        });
    });
    
    // Time Management page to add hours / view Schedule table
    app.get('/time-management', function(req, res) {

        db.Schedule.findAll({}).then(function(data) {

            // console.log("your data \n",data);
            res.render("partials/time-management", { Schedule: data });
        });

    });

    // Employee management page to add employee / view Employees table
    app.get('/add-employee', function(req, res) {
        db.Employees.findAll({}).then(function(data) {

            // console.log("your data \n",data);
            res.render("partials/add-employee", { Employees: data });
        });
    });    

    // App Info page
    app.get('/app-info', function(req, res) {
        res.render("partials/app-info")
    });

    // Design team page
    app.get('/team', function(req, res) {
        res.render('partials/team');
    });

    // Contact Us page
    app.get('/contact', function(req, res) {
        res.render('partials/contact');
    });


};

