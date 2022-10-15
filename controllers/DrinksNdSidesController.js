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

    createSidesOrder: function(req,res){
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
}