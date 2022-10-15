// const express = require("express");
// const jwt = require("jsonwebtoken");
// const router = express.Router();
const { Orden } = require("../models");


const {Sides} = require("../models");


const db = require("../models");


module.exports = {
      allOrdens: function(req, res) {
//         console.log(req.headers);
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
     
      // db.Orden.find(req.query)
      db.Orden.find(req.query)
      .populate({path: "sides", select: "allSidesPrice -_id" }, )
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


     
     create: function(req, res){
      const orden = new Orden(req.body);
      orden.getTacoPrice();
      const seedrinks = orden.sides;

      Sides.findById( seedrinks).then((resultado) =>{  
       orden.ordenTotal = orden.tacosTotal + resultado.allSidesPrice
       db.Orden.create(orden)
       .then((dbOrden) => {
        console.log("checking");
        console.log(dbOrden)
        res.json(dbOrden)
         }).catch((err) => {
           console.log(err);
           res.json({
             error: true,
             data: null,
             message: "failed to post order/orden data",
           });
         });
      }).catch((err) => {
              console.log(err);
            });
      },


      remove: function(req, res) {
        db.Orden.findByIdAndDelete(req.params.id)
        
        .then((result) => {
          console.log(result)
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to delete orden/order data",
          });
        });

      },

        getOne: function(req, res) {
          db.Orden.findOne({ _id: req.params.id })
          .populate({path: "drinksPrice", select: "allBebidasPrice -_id" }, )
          .then((foundOrden) => {
            res.json(foundOrden);
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

        updateOrden: function(req, res) {
          db.Orden.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .then((updatedOrder) => {
            res.json(updatedOrder);
          })
          .catch((err) => {
            console.log(err);
            res.json({
              error: true,
              data: null,
              message: `failed to update order/orden document for ${req.params.id}`,
            });
          });
        
        }


};
      // .populate({path: "drinksPrice", select: "allBebidasPrice -_id" }, )

                      ////////legacy code///////
                      // db.Orden.aggregate([
                      //   {
                      //     $project: {
                      //       ordenTotal: { $sum: [ "$drinksPrice", "$tacoTotal" ] }
                      //     }
                      //   }])
      
// router.put("/api/orden", (req, res) =>{
//   db.Orden.findByIdAndUpdate(req.params.id, req.body, { new: true })
//   .then((updatedOrder) => {
//     res.json(updatedOrder);
//   })
//   .catch((err) => {
//     console.log(err);
//     res.json({
//       error: true,
//       data: null,
//       message: `failed to update order/orden document for ${req.params.id}`,
//     });
//   });

// });


  //new true makes sure the new updatedOrden object is returned and not the old one


// router.get("/api/orden/:id", (req, res) => {
//   db.Orden.findOne({ _id: req.params.id })
//     .then((foundOrden) => {
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

// router.get("/api/orden", (req, res) => {
//   // console.log(req.headers);
//   // if (!req.headers.authorization) {
//   //   return res.status(401).json({
//   //     error: true,
//   //     data: null,
//   //     message: "unauthorized user",
//   //   });
//   // }
//   // jwt.verify(
//   //   req.headers.authorization,
//   //   process.env.SECRET,
//   //   (err, decoded) => {
//   //     if (err) {
//   //       console.log(err);
//   //       res.status(401).json({
//   //         error: true,
//   //         data: null,
//   //         message: "bad credentials",
//   //       });
//   //     } else {
//   //       console.log(decoded);

//         db.Orden.find({})
          
//           .then((foundOrden) => {
//             res.json(foundOrden);
//           })
//           .catch((err) => {
//             console.log(err);
//             res.status(500).json({
//               error: true,
//               data: null,
//               message: "faild to get all orders.",
//             });
//           });
//   //     }
//   //   }
//   // );
// });


// // router.post("/api/orden", (req, res) => {
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

//         // const orden = new Orden(req.body);
//         // orden.addTotal();
//         // orden.getPrecio();
//         // db.Orden.create(orden)
//         //   .then((dbOrden) => {
//         //     res.json(dbOrden);
//         //   })
//         //   .catch((err) => {
//         //     console.log(err);
//         //     res.json({
//         //       error: true,
//         //       data: null,
//         //       message: "failed to post order/orden data",
//         //     });
//         //   });
//   //     }
//   //   }
//   // );
// });

// router.delete("/api/orden/:id", (req, res) => {
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

// // router.delete("/", (req, res) => {
// //   db.Orden.deleteMany({})
// //     .then((result) => {
// //       res.json(result);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.json({
// //         error: true,
// //         data: null,
// //         message: "failed to delete orden data",
// //       });
// //     });
// });

// module.exports = router;
