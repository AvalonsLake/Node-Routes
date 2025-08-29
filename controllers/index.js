const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const getAllStudents = async (Req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const newFunction = (Req, res) => {
  res.send("This is a New Function");
};

module.exports = { awesomeFunction, tooeleTech, getAllStudents, newFunction };
