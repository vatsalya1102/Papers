//jshint esversion: 6
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index.ejs");
});

app.get("/years", function(req, res){
  res.render("year.ejs");
});

app.use(express.static(__dirname));

app.listen(3000, function() {
  console.log("Server has started successfully");
});
