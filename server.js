var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const getPaginatedClients = require("./data/getPaginatedClients.js");
const getClientById = require("./data/getClientById.js");
const getPaginatedProjects = require("./data/getPaginatedProjects.js");
const getProjectById = require("./data/getProjectById.js");
const getProjects = require("./data/getProjects.js");
const getProjectByClientId = require("./data/getProjectByClientId.js");
const getClients = require("./data/getClients.js");
const addProject = require("./data/addProject.js");
const deleteProject = require("./data/deleteProject.js");
const updateProject = require("./data/updateProject.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/client/getclients", (req, res) => {
  console.log("/getClients");
  res.status(200).send(getClients());
});
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

app.get("/project/getProjects", (req, res) => {
  console.log("/getProjects");
  res.status(200).send(getProjects());
});
app.get("/project/getprojectlist", function (req, res) {
  console.log("/getprojectlist");
  res.status(200).send(getPaginatedProjects());
});

app.get("/project/getprojectbyid/", function (req, res) {
  console.log("/getProjectById");
  res.status(200).send(getProjectById());
});

app.get("/project/getprojectbyclientid/:id", (req, res) => {
  console.log("/getProjectByClientId");
  res.status(200).send(getProjectByClientId());
});

app.post("/project/addproject", (req, res) => {
  console.log("/addProject");
  res.status(200).send(addProject());
});

app.post("/project/updateproject/:id", (req, res) => {
  console.log("/updateProject");
  res.status(200).send(updateProject());
});

app.post("/project/deleteproject/:id", (req, res) => {
  console.log("/deleteProject");
  res.status(200).send(deleteProject());
});
//server port
app.listen(5001, () => {
  console.log("Server started at 5001");
});
