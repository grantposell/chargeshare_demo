var express = require("express");
var path = require('path');
// var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
// var expressValidator = require('express-validator');
// var flash= require('connect-flash');
var session = require('express-session');
var passport = require("./config/passport");
// var LocalStratey = require('passport-local').Strategy;
// var mongo = require('mongo');
// var mongoose = require('mongoose');
// var mysql = require('mysql');
var mysql2 = require('mysql2');
var Sequelize = require('sequelize');
var env = require('dotenv').load()

// mongoose.connect('mongodb://localhost/chargeshare_demo');
// var db = mongoose.connection;

var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser());

app.use(express.static("public")); 


// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
// app.use(expressValidator({
//     errorFormatter: function(param, msg, value) {
//         var namespace = param.split('.')
//         , root    = namespace.shift()
//         , formParam = root;
  
//       while(namespace.length) {
//         formParam += '[' + namespace.shift() + ']';
//       }
//       return {
//         param : formParam,
//         msg   : msg,
//         value : value
//       };
//     }
//   }));

//   // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
//   });

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//change force back to true
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});