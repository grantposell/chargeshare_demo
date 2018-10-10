// var path = require("path");
// // var authRoute = require('./auth.js');
// // Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");
// //var authController = require('../controllers/authcontroller.js');
// //var passport = require('passport');
// module.exports = function (app) {

//     app.get("/", function (req, res) {
//         if (req.user) {
//             res.redirect("/");
//           }
//         var hbsObj = {
//             title: "LogIn",
//             bodyClass: "signInBody"
//         }
//         res.render("login", hbsObj)
//     });
//     //added route for login buttons
//     app.get("/login", function (req, res) {
//         var hbsObj = {
//             title: "LogIn"
//         }
//         res.render("login", hbsObj)
//     });


//     //app.get('/signup', authController.signup);

//     app.get("/signup", function (req, res) {
//         var hbsObj = {
//             title: "signup",
//             bodyClass: "blue"
//         }
//         res.render("signup", hbsObj)
//     });
//     //after signing up or in, direct to myPlants
//     //logo takes user to myPlants

//     //ChargeShare = home page
//     app.get("/index", isAuthenticated, function (req, res) {
//         var hbsObj = {
//             title: "ChargeShare",
//             bodyClass: ""
//         }
//         res.render("", hbsObj)
//     });

//     app.get("/invest", isAuthenticated, function (req, res) {
//         var hbsObj = {
//             title: "Add funds",
//             bodyClass: "...."
//         }
//         res.render("", hbsObj)
//     });

//     app.get("/about", function (req, res) {
//         var hbsObj = {
//             title: "About Charge Share"
//         }
//         res.render("about", hbsObj)
//     });



   
// };


