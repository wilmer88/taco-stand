const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {


  login: function (req, res) {
    const { userName, password } = req.body;
  db.User.findOne({ userName: userName })
    .then((founduser) => {
      if (founduser) {
        console.log(founduser);
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
                // "chango"
              );
              res.status(200).json({
                error: false,
                userName: founduser.userName,
                data: token,
                message: "succesfully logged in",
              });
            } else {
        
              res.status(401).json({
                error: true,
                data: null,
                message: "bad sign in",
              });
          };
          }).catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "failed to login/ Mal credenciales ",
            });
          });
      }
     else {
        
        res.status(401).json({
          error: true,
          data: null,
          message: "bad sign in",
        });

      };
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "website error",
      });
    });
  }