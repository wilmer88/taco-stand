const express = require("express");
const router = express.Router();
const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
signup: function(req, res) { 
      const { userName, password } = req.body;
      if (!userName.trim() || !password.trim()) {
       return res.status(400);
      } else {
        console.log(userName);
        console.log(password);
        bcrypt
          .hash(req.body.password, 10)
          .then((hashedPassword) => {
            console.log(hashedPassword);
            User.create({
              userName: userName,
              password: hashedPassword,
            })
              .then((newUser) => {
                const token = jwt.sign(
                  {
                    userName: newUser.userName,
                    password: newUser.password,
                  },
                  process.env.SECRET
                );
                res.status(200).json({
                  error: false,
                  data: token,
                  message: "succesfully signed up",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: true,
                  data: null,
                  message: "failed to hash",
                });
              });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "failed to create user",
            });
          });
      }
  },
  
  getUser: function(req, res) {

    User.findOne({userName: req.params.keyword})
    .then((foundOrden) => {
      res.json(foundOrden);
      console.log(foundOrden);

    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `failed to retrive order/orden document for ${req.params.id}`,
      });
    });
  },
  
}
