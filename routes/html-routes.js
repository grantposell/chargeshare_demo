// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/electric", function(req, res) {
    res.sendFile(path.join(__dirname, "../electric.html"));
  });

  app.get("/network", function(req, res) {
    res.sendFile(path.join(__dirname, "../network.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../about.html"));
  });

  app.get("/chargingguide", function(req, res) {
    res.sendFile(path.join(__dirname, "../charginggudie.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
  });

  app.get("/faq", function(req, res) {
    res.sendFile(path.join(__dirname, "../faq.html"));
  });

  app.get("/invest", function(req, res) {
    res.sendFile(path.join(__dirname, "../invest.html"));
  });

  app.get("/pricing", function(req, res) {
    res.sendFile(path.join(__dirname, "../pricing.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the landing page
    if (req.user) {
      res.redirect("../");
    }
    res.sendFile(path.join(__dirname, "../signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the landing page
    if (req.user) {
      res.redirect("../");
    }
    res.sendFile(path.join(__dirname, "../login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/signup", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../invest.html"));
  // });

};
