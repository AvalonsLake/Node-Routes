require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

const home = (req, res) => {
  res.send("Welcome to the home page");
};
const register = (req, res) => {
  res.send("Welcome to the register page");
};
const login = (req, res) => {
  res.send("Welcome to the login page");
};
const logout = (req, res) => {
  res.send("Welcome to the logout page");
};
const protected = (req, res) => {
  res.send("Welcome to the protected page");
};
module.exports = { home, register, login, logout, protected };
