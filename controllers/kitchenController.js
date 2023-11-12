const express = require("express");
const router = express.Router();
const { Orden, User } = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {


  allKitchenOrdens: function(req, res) {
        
    // console.log(req.headers);
//  if (!req.headers.authorization) {
//    return res.status(401).json({
//      error: true,
//      data: null,
//      message: "unauthorized user",
//    });
//  }
//  jwt.verify(
//    req.headers.authorization,
//    process.env.SECRET,
//    (err, decoded) => {
//      if (err) {
//        console.log(err);
//        res.status(401).json({
//          error: true,
//          data: null,
//          message: "bad credentials",
//        });
//      } else {
//        console.log(decoded);

  Orden.find()
   .then((foundOrden) => {
    console.log(foundOrden)
    res.json(foundOrden)})
   .catch((err) =>{
    console.log(err)
    res.status(422)
   .json(err)
   });

//           }
//    }
//  );

 },  


//  allKitchenOrdens: function(req, res) {
        
//   // console.log(req.headers);
// //  if (!req.headers.authorization) {
// //    return res.status(401).json({
// //      error: true,
// //      data: null,
// //      message: "unauthorized user",
// //    });
// //  }
// //  jwt.verify(
// //    req.headers.authorization,
// //    process.env.SECRET,
// //    (err, decoded) => {
// //      if (err) {
// //        console.log(err);
// //        res.status(401).json({
// //          error: true,
// //          data: null,
// //          message: "bad credentials",
// //        });
// //      } else {
// //        console.log(decoded);

// Orden.find(req.query).sort({_id: -1})
//  .then((foundOrden) => {
//   console.log(foundOrden)
//   res.json(foundOrden)})
//  .catch((err) =>{
//   console.log(err)
//   res.status(422)
//  .json(err)
//  });

// //           }
// //    }
// //  );


  // login: function (req, res) {
  //   const { userName, password } = req.body;
  // db.User.findOne({ userName: userName })
  //   .then((founduser) => {
  //     if (founduser) {
  //       console.log(founduser);
  //       bcrypt
  //         .compare(password, founduser.password)
  //         .then(function (resultado) {
  //           console.log(resultado);
  //           if (resultado) {
  //             const token = jwt.sign(
  //               {
  //                 userName: founduser.userName,
  //                 password: founduser.password,
  //               },
  //               process.env.SECRET
  //               // "chango"
  //             );
  //             res.status(200).json({
  //               error: false,
  //               userName: founduser.userName,
  //               data: token,
  //               message: "succesfully logged in",
  //             });
  //           } else {
        
  //             res.status(401).json({
  //               error: true,
  //               data: null,
  //               message: "bad sign in",
  //             });
  //         };
  //         }).catch((err) => {
  //           console.log(err);
  //           res.status(500).json({
  //             error: true,
  //             data: null,
  //             message: "failed to login/ Mal credenciales ",
  //           });
  //         });
  //     }
  //    else {
        
  //       res.status(401).json({
  //         error: true,
  //         data: null,
  //         message: "bad sign in",
  //       });

  //     };
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: true,
  //       data: null,
  //       message: "website error",
  //     });
  //   });
  // },

}