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

    // index route loads index.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // cms route loads cms.html
    app.get("/timesheet", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/timesheet.html"));
    });

    // blog route loads blog.html
    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // authors route loads author-manager.html
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

        // authors route loads author-manager.html
    app.get("/team", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/team.html"));
    });

};

