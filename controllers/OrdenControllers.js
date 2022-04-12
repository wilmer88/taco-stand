// const jwt = require("jsonwebtoken");
// const express = require("express");
// const { Orden } = require("../models");
// const router = express.Router();
const { Orden } = require("../models");
const db = require("../models");

module.exports = {
  findById: function(req, res){
    db.Orden
    .findById(req.params.id)
    .then(dModel => res.json(dModel))
    .catch(err => res.status(422).json(err))
  },
  findAll: function(req, res){
    db.Orden
    .find(req.query)
    .sort({date: -1})
    .then(dModel => res.json(dModel))
    .catch(err => res.status(422).json(err))
  },

  create: function(req, res) {
    const orden = new Orden(req.body);
    orden.addTotal();
    orden.getPrecio();
          db.Orden
          .create(orden)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));

  },

  
  update: function(req, res) {
   
          db.Orden
          .findByIdAndUpdate({_id: req.params.id}, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));

  },


  }
  
  // .get("/", (req, res) => {
    // console.log(req.headers);
    // if (!req.headers.appathorization) {
    //   return res.status(401).json({
    //     error: true,
    //     data: null,
    //     message: "unauthorized user",
    //   });
    // }
    // jwt.verify(
    //   req.headers.appathorization,
    //   process.env.SECRET,
    //   (err, decoded) => {
    //     if (err) {
    //       console.log(err);
    //       res.status(401).json({
    //         error: true,
    //         data: null,
    //         message: "bad credentials",
    //       });
    //     } else {
    //       console.log(decoded);
  
          // db.Orden.find({})
          //   .populate("clienteId", "completado")
          //   .then((foundOrden) => {
          //     res.set('Access-Control-Allow-Origin', '*');
          //     res.json(foundOrden);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //     res.status(500).json({
          //       error: true,
          //       data: null,
          //       message: "faild to get all orders.",
          //     });
          //   });
    //     }
    //   }
    // );
  // });
  
  // router.get("/:id", (req, res) => {
  //   db.Orden.findOne({ _id: req.params.id })
  //     .then((foundOrden) => {
  //       res.set('Access-Control-Allow-Origin', '*');
  //       res.json(foundOrden);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.json({
  //         error: true,
  //         data: null,
  //         message: `failed to retrive order/orden document for ${req.params.id}`,
  //       });
  //     });
  // });
  // router.post("/", (req, res) => {
  //   // console.log(req.headers);
  //   // if (!req.headers.appathorization) {
  //   //   return res.status(401).json({
  //   //     error: true,
  //   //     data: null,
  //   //     message: "unauthorized",
  //   //   });
  //   // }
  
  //   // jwt.verify(
  //   //   req.headers.appathorization,
  //   //   process.env.SECRET,
  //   //   (err, decoded) => {
  //   //     if (err) {
  //   //       console.log(err);
  //   //     } else {
  //   //       console.log(decoded);
  
  //         const oorden = new Orden(req.body);
  //         oorden.addTotal();
  //         oorden.getPrecio();
  //         db.Orden.create(oorden)
  //           .then((dbOrden) => {
  
  //             res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  //             res.header("Access-Control-Allow-Headers", "Origin, localhost:3000, Content-Type, Accept");
  //             next();
  //             console.log(dbOrden)
  
  //             res.json(dbOrden).header("Access-Control-Allow-Origin", "*") ;
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             res.json({
  //               error: true,
  //               data: null,
  //               message: "failed to post order/orden data",
  //             });
  //           });
  //   //     }
  //   //   }
  //   // );
  // });
  // router.put("/:id", (req, res) => {
  //   //new true makes sure the new updatedOrden object is returned and not the old one
  //   db.Orden.findByIdAndUpdate(req.params.id, req.body, { new: true })
  //     .then((updatedOrder) => {
  //       res.json(updatedOrder);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.json({
  //         error: true,
  //         data: null,
  //         message: `failed to update order/orden document for ${req.params.id}`,
  //       });
  //     });
  // });
  // router.delete("/:id", (req, res) => {
  //   db.Orden.findByIdAndDelete(req.params.id)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.json({
  //         error: true,
  //         data: null,
  //         message: "failed to delete orden/order data",
  //       });
  //     });
  // });
  // router.delete("/", (req, res) => {
  //   db.Orden.deleteMany({})
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.json({
  //         error: true,
  //         data: null,
  //         message: "failed to delete orden data",
  //       });
  //     });
  // });
  
 
  
  
  
// }

