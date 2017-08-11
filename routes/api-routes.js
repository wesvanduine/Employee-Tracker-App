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


    app.post('api/login', function(req, res) {
        console.log(req.body.username);
        console.log(req.body.password);
    });

    app.get('/api', function(req, res) {
        
        db.Employees.findAll({}).then(function(Employee) {
            res.json(Employee);
        });

    });


    app.post('/api/create', function(req, res) {
        
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
            res.redirect('/add-employee');

            // console.log(data);
        });
    });

    app.get('/api/hours', function(req, res) {
        db.Schedule.findAll({}).then(function(Schedule) {
            res.json(Schedule);
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