const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);

routes.use("/students", require("./students"));

//auth routes
routes.use("/auth", require("./auth"));

routes.get("/createStudent", myController.createStudent);

module.exports = routes;
