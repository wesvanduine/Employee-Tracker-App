// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const bcrypt = require('bcrypt');

// Routes
// =============================================================
module.exports = function(app) {

    // GET route to display a JSON view of the Employees table
    app.get('/api/employees', function(req, res) {
        
        db.Employees.findAll({
            // include: [db.Schedule]
        }).then(function(Employee) {
            res.json(Employee);
        });

    });

    // GET route to display a single employee
    app.get("/api/employees/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
        db.Employees.findOne({
          where: {
            id: req.params.id
          },
          // include: [db.Schedule]
        }).then(function(dbEmployees) {
          res.json(dbEmployees);
        });
      });

    // POST route to add an Employee to the 'Employees' table
    app.post('/api/employees', function(req, res) {
        
        // Store password entered
        const passwordEntered = req.body.password;
        // Create salt rounds, used to generate salt for 'bcrypt'
        const saltRounds = 10;
        // Generate a salt and a hash for password, using 'bcrypt'
        bcrypt.hash(passwordEntered, saltRounds).then(passwordHash => {
            // Create and add new employee to database
            db.Employees.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone_number: req.body.phone_number, 
                address: req.body.address,
                username: req.body.username,
                password: passwordHash, // Store hash in database
                admin: req.body.admin
            }).then(function(data) {
                res.redirect('/time-management');
                // console.log(data);
            });

        });
        
    });


    // ----------- THIS ROUTE HITS SUCCESSFULLY, BUT I CAN'T GET THE SEQUELIZE QUERY TO WORK ----------- //
    // DELETE route for deleting posts
    app.delete("/api/employees/:id", function(req, res) {

        db.Employees.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });
    // ----------------------------------------------------- //


    // PUT route for updating posts
    app.put("/api/employees/:id", function(req, res) {
        db.Employees.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(data) {
            res.json(data);
        });
    });

};