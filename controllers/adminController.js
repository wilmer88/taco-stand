const jwt = require("jsonwebtoken");
const { Orden } = require("../models");
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

      //  console.log(decoded);
      // db.Orden.find(req.query)
      db.Orden.find(req.query)
     
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
     
     

    /////////change paid boolean/////////////
    
  changeOrderToPaid: function(req,res){
      Orden.findByIdAndUpdate(req.params.id, req.body, { new: true}).then((updatedOrden) => {
           res.json(updatedOrden);
      }).catch((err) => {
            console.log(err);
            res.json({
                  error:true,
                  data: null,
                  message: `faild to update paid field for order id ${req.params.id}`
            });
      });
    },



    ////// All Unprepared orders///////
    getUnpreparedOrders: function(req, res) {   
       
       
      Orden.find({preparada: false})
      .then((foundit) => {

        res.json(foundit);
        console.log(req.params);

      

      })
      .catch((err) => {
        console.log(err);
        res.json({
          error: true,
          data: null,
          message: `failed to retrive order/orden document for ${req.params.id}`
        });
      });
    },








      


};