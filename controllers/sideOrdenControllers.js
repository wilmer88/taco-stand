const { SideOrden } = require("../models");
const db = require("../models");

module.exports = {

  SideOrders: function(req, res){
    db.SideOrden.find(req.query)
    .populate("mainOrden")
    .sort({ date: -1 })
    .then((foundOrden) => {res.json(foundOrden)})
    .catch((err) =>  res.status(422).json(err));
  },

    createSideOrder: function(req,res){
        const createdSideOrder = new SideOrden(req.body);
        createdSideOrder.verdurasTogether()
      
      db.SideOrden.create(createdSideOrder)
        .then((dbSideOrden) => {
          console.log(dbSideOrden)
         res.status(201);
         res.json(dbSideOrden);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to post sideOrder data",
          });
        });
      },   
}