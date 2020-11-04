const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/contact", function(req, res) {
  res.send("contact page");
});

app.get("/about", function(req, res) {
  res.send("This is my bio, i love pizza.");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});


// This page:
// requires express and creats and app
// then it has a get request with a function that calls back what i want in this case is a send response to the get request. inside the app.get the first part is the route that has been requested.
// The bottom part is the local server I am hosting it all on, the app.listen part is a method that "listens for get requests ie: when the user types the address 'localhost:3000/contact then the listen method allows the user to be routed to the 'contact page'.
