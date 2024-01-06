var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const getPaginatedClients = require("./data/getPaginatedClients.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/client/getclientlist", function (req, res) {
  console.log("/getclientlist");
  res.status(200).send(getPaginatedClients());
});

app.post("/client/addClient", function (req, res) {
  console.log("/addClient");
  res.status(201).send({ message: "Client Added Successfully" });
});

//server port
app.listen(5001, () => {
  console.log("Server started at 5001");
});
