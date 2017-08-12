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
                        res.redirect('/dashboard');
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


    app.post('/api', function(req, res) {
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
                res.redirect('/');
                // console.log(data);
            });

        });
        
    });

    // app.post('/api', function(req, res) {

    //     db.Employees.create({
    //         first_name: "first name",
    //         last_name: 'last name'
    //     }).then(function(data) {
    //         console.log(data);
    //     })
    // });

    // app.get('api/employee-add', function(req, res) {

    //     db.Employees.findAll({}).then(function(data) {
    //         res.json(data);
    //     });

    // })




    // // GET route for getting all of the posts
    // app.get("/employees", function(req, res) {
    //     // var query = {};
    //     // // if (req.query.author_id) {
    //     // //     query.AuthorId = req.query.author_id;
    //     // // }
    //     // // Here we add an "include" property to our options in our findAll query
    //     // // We set the value to an array of the models we want to include in a left outer join
    //     // // In this case, just db.Author
    //     // db.Post.findAll({
    //     //     where: query,
    //     //     include: [db.Employees]
    //     // }).then(function(dbEmployees) {
    //     //     res.json(dbEmployees);
    //     // });

    //     res.json(res.Employees);

    //     console.log(db.Employees);

    // });

    // app.get("/", function(req, res) {

    //     db.Employees.findAll({}).then(function(data) {
    //         var hbsObject = {
    //             Employees: data
    //                 // Burger: data
    //         };
    //         console.log(hbsObject);
    //         res.render("index", hbsObject);
    //     });
    // });




    // app.get('/', function(req, res) {
    //     res.render
    // }

    // // Get rotue for retrieving a single post
    // app.get("/api/posts/:id", function(req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Author
    //     db.Post.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [db.Author]
    //     }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

    // // POST route for saving a new post
    // app.post("/api/add-employees", function(req, res) {
    //     db.Employees.create(req.body).then(function(dbEmployee) {
    //         res.json(dbEmployee);
    //     });
    // });






    // DELETE route for deleting posts
    // app.delete("/api/posts/:id", function(req, res) {
    //     db.Post.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbPost) {
    //         res.json(dbPost);
    //     });
    // });

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

// Passport
passport.serializeUser((user_id, done) => {
    done(null, user_id);
});

passport.deserializeUser((user_id, done) => {
    done(null, user_id);
});