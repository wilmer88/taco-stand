const jwt = require("jsonwebtoken");
const { Orden } = require("../models");
const db = require("../models");
module.exports = {

      adminOrdens: function(req, res) {
        
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
      db.Orden.find(req.query)
     
       .then((foundOrden) => {
        console.log(foundOrden)
        res.json(foundOrden)})
       .catch((err) =>{
        console.log(err)
        res.status(422)
       .json(err)
       });
          }
   }
 );
     }, 
     
     

    /////////Remove Order/////////////


      


};