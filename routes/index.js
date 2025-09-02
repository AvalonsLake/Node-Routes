const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);

routes.get("/students", myController.getAllStudents);

routes.get("/student", myController.getSingleStudent);

//auth routes
routes.use("/auth", require("./auth"));

routes.get("/createStudent", myController.createStudent);

routes.get("/new", myController.newFunction);

module.exports = routes;
