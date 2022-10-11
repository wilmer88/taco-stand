const { drinks } = require("../models");
const db = require("../models");

module.exports = {

  getDrinks: function(req, res){
    db.drinks.find(req.query)
    .populate("orderLink")
    .sort({ date: -1 })
    .then((foundDrinks) => {res.json(foundDrinks)})
    .catch((err) =>  res.status(422).json(err));
  },

    createDrinkOrder: function(req,res){
        const createDrinkOrder = new drinks(req.body);
        createDrinkOrder.getAguasOnlyPrice();
        createDrinkOrder.addAllBebidasPrice();
      db.drinks.create(createDrinkOrder)
        .then((dbDrinks) => {
          console.log(dbDrinks)
         res.status(201);
         res.json(dbDrinks);
        })
        .catch((err) => {
          console.log(err);
          res.json({
            error: true,
            data: null,
            message: "failed to post drinks data",
          });
        });
      },   
}