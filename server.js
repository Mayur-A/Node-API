var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const getPaginatedClients = require("./data/getPaginatedClients.js");
const getClientById = require("./data/getClientById.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/client/getclientlist", function (req, res) {
  console.log("/getclientlist");
  res.status(200).send(getPaginatedClients());
});

app.get(`/client/getClientById/:id`, function (req, res) {
  console.log("/getClientById");
  res.status(200).send(getClientById());
});

app.post("/client/addClient", function (req, res) {
  console.log("/addClient");
  res.status(200).send({ message: "Client Added Successfully" });
});

app.post("/client/deleteClient/:id", function (req, res) {
  console.log("/deleteClient");
  res.status(200).send({ id: 1 });
});

//server port
app.listen(5001, () => {
  console.log("Server started at 5001");
});
