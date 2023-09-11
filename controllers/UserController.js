const express = require("express");
const router = express.Router();
const {User, Orden} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
signup: function(req, res) { 

      const { userName, password, admin } = req.body;
      if (!userName.trim() || !password.trim()) {
       return res.status(400);
      } else {
        console.log(userName);
        console.log(password);
        console.log(admin);
  
        bcrypt
          .hash(req.body.password, 10)
          .then((hashedPassword) => {
            console.log(hashedPassword);
            User.create({
              userName: userName,
              password: hashedPassword,
              admin: admin,
            })
              .then((newUser) => {
                const token = jwt.sign(
                  {
                    userName: newUser.userName,
                    password: newUser.password,
                    admin: newUser.admin,
                  },
                  process.env.SECRET
                );
                res.status(200).json({
                  error: false,
                  data: token,
                  userName:newUser.userName,
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
    console.log(req.headers);
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: true,
        data: null,
        message: "unauthorized user",
      });
    }
    jwt.verify(
      req.headers.authorization,
      process.env.SECRET,
      (err, decoded) => {
        if (err) {
          console.log(err);
          res.status(401).json({
            error: true,
            data: null,
            message: "bad credentials",
          });
        } else {
          console.log(decoded);
         // db.Orden.find(req.query)
         User.findOne({userName: req.params.keyword})
         .populate("orders")
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

       };
      }
    );
  }, 

}
