// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route to display a JSON view of the Employees table
    app.get('/api/employees', function(req, res) {
        
        db.Employees.findAll({}).then(function(Employee) {
            res.json(Employee);
        });

    });


    // GET route to display a JSON view of the Schedule table
    app.get('/api/schedule', function(req, res) {

        db.Schedule.findAll({}).then(function(Schedule) {
            res.json(Schedule);
        });
    });


    // POST route to add an Employee to the 'Employees' table
    app.post('/api/create', function(req, res) {
        
        // sequelize create method
        db.Employees.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number, 
            address: req.body.address,
            username: req.body.username,
            password: req.body.password,
            admin: req.body.admin

        }).then(function(data) {

            // redirects user to same page
            res.redirect('/add-employee');

            // this doesn't work but I want it to. Need to figure out how to join 'findAll' statements so I can render 2 views
            // res.render('partials/add-employee');
        });
    });

    // POST route to add hour information to the Schedule table
    app.post('/api/add-hours', function(req, res) {

        // sequelize create method
        db.Schedule.create({
            date_time: req.body.first_name,
            week: req.body.last_name,
            timeIn: req.body.monday,
            timeOut: req.body.tuesday,
            totalHours: req.body.total_hours

        }).then(function(data) {

            // redirects user to current page
            res.redirect('/time-management');

            // this doesn't work but I want it to. Need to figure out how to join 'findAll' statements so I can render 2 views
            // res.render('partials/time-management')

        });
    });


    // DELETE route for deleting posts
    app.delete("/api/delete/:id", function(req, res) {
        db.Employees.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbEmployees) {
            res.json(dbEmployees);
        });
    });

    // // PUT route for updating posts
    // app.put("/api/posts", function(req, res) {
    //     db.Post.update(
    //         req.body, {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

};