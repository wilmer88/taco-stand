const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = {
createUser: function(req, res) { 
  db.User.create(req.body)
  .then((newUser) => {
    res.json(newUser);
  })
  .catch((err) => {
    console.log(err);
    res.json({
      error: true,
      data: null,
      message: "failed to create user",
    });
  });
}
}