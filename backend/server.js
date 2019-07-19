const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const Rule=require("./src/Rule.js");
const app = express();


app.all("*", function(req, res, next) {
  var origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  return next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var rule = new Rule();
app.post("/rule", (req, res) => rule.start(req,res));


app.listen(PORT, () => console.log(`Listening on ${PORT}`));