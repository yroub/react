var express = require("express");
var path = require("path");
const mongoose = require("mongoose")

mongoose.connect(
  'mongodb+srv://dev:leon@cluster0.ebnr8.mongodb.net/chapReact21?retryWrites=true&w=majority', 
  err => {
    if (err) {
      console.log("ERROR DB");
    } else {
      console.log("CONNEXION DB OK !");
    }
  }
);


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client-build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-build/index.html"));
});

module.exports = app;