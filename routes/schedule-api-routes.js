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


    // GET route to display a JSON view of the Schedule table
    app.get('/api/schedule', function(req, res) {

        db.Schedule.findAll({
            include: [db.Employees]
        }).then(function(Schedule) {
            res.json(Schedule);
        });
    });

    app.get("/api/schedule/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
        db.Schedule.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Employees]
        }).then(function(dbSchedule) {
          res.json(dbSchedule);
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


    // DELETE route for deleting hours
    app.delete("/api/add-hours/:id", function(req, res) {

        db.Employees.destroy({
            where: {
                id: req.params.id
            },
            include: [db.Schedule]
        }).then(function(data) {
            res.redirect('/add-employee');
        });
    });



    // // PUT route for updating posts
    // app.put("/api/posts", function(req, res) {
    //     db.Employees.update(
    //         req.body, {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

};