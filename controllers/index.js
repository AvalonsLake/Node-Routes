const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (Req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (Req, res) => {
  res.send("Tooele Tech is Awesome!");
};

// GET all students

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

// GET single contact

const getSingleStudent = async (Req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("students")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE contact

const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .insertOne(student);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const newFunction = (Req, res) => {
  res.send("This is a New Function");
};

module.exports = {
  awesomeFunction,
  tooeleTech,
  getAllStudents,
  getSingleStudent,
  createStudent,
  newFunction,
};
