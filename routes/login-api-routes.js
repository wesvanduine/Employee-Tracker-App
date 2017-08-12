// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const bcrypt = require('bcrypt');
const passport = require('passport');

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.post('/api/login', function(req, res) {
        // Store username and password that user entered
        const usernameEntered = req.body.username;
        const passwordEntered = req.body.password;
        console.log(usernameEntered);
        console.log(passwordEntered);

        // Query to find username in database
        db.Employees.findOne({
            where: {
                username: usernameEntered
            }
        }).then(employee => {
            console.log('Employee: ' + employee);

            // Check if matching username was found in database
            if (employee === null) {
                console.log(`Could not find username '${usernameEntered}' in database.`);
                res.redirect('/');
            } else {
                // Compare password entered to password stored in database, using 'bcrypt'
                const validPassword = bcrypt.compareSync(passwordEntered, employee.password); // True or False

                if (validPassword) {
                    console.log('UserID: ' + employee.id);
                    req.login(employee.id, (err) => {
                        res.redirect('/time-management');
                    });
                } else {
                    console.log('Password does not match');
                    res.redirect('/');
                }
            }
        });

    });

    app.get('/api', function(req, res) {
        db.Employees.findAll({}).then(function(Employee) {
            res.json(Employee);
        });
    });

};

// Passport
passport.serializeUser((user_id, done) => {
    done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
    done(null, user_id);
});