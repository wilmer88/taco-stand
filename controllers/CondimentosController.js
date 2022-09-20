const express = require("express");
const { condimentosNdrinks } = require("../models");
const db = require("../models");

module.exports = {
    createSideOrder: function(req,res){
        const sideOrder = new condimentosNdrinks(req.body);
        sideOrder.verdurasTogether();
        sideOrder.addingVerduraPrice ();
      db.condimentosNdrinks.create(sideOrder)
        .then((dbSideOrden) => {
         res.status(201).res.json(dbSideOrden);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to post condimento data",
          });
        });
      },

      allSideOrders: function(req, res){
        db.Orden.find(req.query)
        .sort({ date: -1 })
        .then((foundOrden) => {res.json(foundOrden)})
        .catch((err) =>  res.status(422).json(err));
      },
     
    
}