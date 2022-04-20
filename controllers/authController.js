const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



//sign up
//jwt.io
module.exports={

create: function (req, res){
  const { userName, password } = req.body;
  if (!userName.trim() || !password.trim()) {
    res.status(400);
  } else {
    console.log(userName);
    console.log(password);
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        console.log(hashedPassword);
        db.User.create({
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
            res.json({
              error: false,
              data: token,
              message: "succesfully signed up",
            });
          })
          .catch((err) => {
            console.log(err);
            res.json({
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
logUser: function (req, res){
  const { userName, password } = req.body;
  db.User.findOne({ userName: userName })
    .then((founduser) => {
      if (founduser) {
        bcrypt
          .compare(password, founduser.password)
          .then(function (resultado) {
            console.log(resultado);
            if (resultado) {
              const token = jwt.sign(
                {
                  
                  userName: founduser.userName,
                  password: founduser.password,
                },
                process.env.SECRET
              );
              res.json({
                error: false,
                data: token,
                message: "succesfully logged in",
              });
            } else {
              res.status(401).json({
                error: true,
                data: null,
                message: "somthing went wrong",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "failed to delete user",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "failed to delete user",
      });
    });
}
          
}




//bcrypt
//jwt
//expiresIn
