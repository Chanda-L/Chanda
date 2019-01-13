const functions = require('firebase-functions');
const express = require('express');
const expressHbs = require('express-handlebars');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const app = express();



app.engine(
    "hbs",
    expressHbs({
      extname: "hbs",
      layoutsDir: __dirname + "/views/layouts/",
      partialsDir: __dirname + "/views/partials/"
    })
  );
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    return res.render("home");
});

app.get("/about", (req, res) => {
    return res.render("about");
});

app.get("/projects", (req, res) => {
    return res.render("my_projects");
});

app.get("/resume", (req, res) => {
    return res.render("resume")
}); 

exports.app = functions.https.onRequest(app);
