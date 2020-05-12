var express = require("express");
var bodyParser = require("body-parser");
var stripe = require("stripe")(process.env.stripeKey);
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET , POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-requested-With, content-type,"
  );
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/html/')
})

var apiRouter = express.Router();



//register Routes
app.use('/api', apiRouter);


//start the server

app.listen(port);
console.log('Magic Happens on this port ' + port);