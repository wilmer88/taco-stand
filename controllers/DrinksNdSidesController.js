const {Sides } = require("../models");
const db = require("../models");
module.exports = {

  getSides: function(req, res){
    db.Sides.find(req.query)
    .populate("orderLink")
    .sort({ date: -1 })
    .then((foundDrinks) => {res.json(foundDrinks)})
    .catch((err) =>  res.status(422).json(err));
  },

    createSideOrder: function(req,res){
        const sides = new Sides(req.body);
        sides.getAguasOnlyPrice();
        sides.addAllsides();
      db.Sides.create(sides )
        .then((dbSides) => {
         res.status(201);
         res.json(dbSides);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to post side order data",
          });
        });
      },   
      removeSideOrder: function(req, res) {
        db.Sides.findByIdAndDelete(req.params.id)
        
        .then((result) => {
          console.log(result)
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to delete Sides/order data",
          });
        });

      },

        getOneSideOrder: function(req, res) {
          db.Sides.findOne({ _id: req.params.id })
          .populate("orderLink")
          .then((foundSides) => {
            res.json(foundSides);
          })
          .catch((err) => {
            console.log(err);
            res.json({
              error: true,
              data: null,
              message: `failed to retrive order/Sides document for ${req.params.id}`,
            });
          });
        },

        updateSideOrder: function(req, res) {
          db.Sides.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .then((updatedOrder) => {
            res.json(updatedOrder);
          })
          .catch((err) => {
            console.log(err);
            res.json({
              error: true,
              data: null,
              message: `failed to update order/sides document for ${req.params.id}`,
            });
          });
        
        },






}