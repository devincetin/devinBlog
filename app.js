// Fixed Require operations

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
require("dotenv").config();


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

// MAilChimp NODE.js
// const mailchimp = require("@mailchimp/mailchimp_marketing");
//
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: "us21",
// });

// For static files
app.use(express.static('public'));

// Sending Index.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});







// Port Server
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running")
});
