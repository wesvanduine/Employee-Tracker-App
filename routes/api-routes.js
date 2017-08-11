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


    // GET route for getting all of the posts
    app.get("/employees", function(req, res) {
        // var query = {};
        // // if (req.query.author_id) {
        // //     query.AuthorId = req.query.author_id;
        // // }
        // // Here we add an "include" property to our options in our findAll query
        // // We set the value to an array of the models we want to include in a left outer join
        // // In this case, just db.Author
        // db.Post.findAll({
        //     where: query,
        //     include: [db.Employees]
        // }).then(function(dbEmployees) {
        //     res.json(dbEmployees);
        // });

        res.json(res.Employees);

        console.log(res.Employees);

    });

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

    app.post('api/add-employee', function(req, res) {

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
            res.redirect('/');
            console.log(data);
            alert('success!!!!!!!');
        })
    })

    // // DELETE route for deleting posts
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