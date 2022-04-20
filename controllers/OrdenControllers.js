const jwt = require("jsonwebtoken");

const { Orden } = require("../models");
const db = require("../models");

module.exports = {
  findByName: function(req, res){
    db.Orden
    .find(req.params.name)
    .then(dModel => res.json(dModel))
    .catch(err => res.status(422).json(err))
  },
  findById: function(req, res){
    db.Orden
    .findById(req.params.id)
    .then(dModel => res.json(dModel))
    .catch(err => res.status(422).json(err))
  },


  findAll: function(req, res){
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
    db.Orden
    .find(req.query)
    .sort({date: -1})
    .then(dModel => res.json(dModel))
    .catch(err => res.status(422).json(err))
          }
    }
  );
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

  remove: function(req, res) {
   
    db.Orden
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

},

  }
  
  