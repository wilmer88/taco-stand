const express = require("express");
const {Orden} = require("../models");


module.exports = {

      searchOrder: function(req, res) {   
       
       
        Orden.find({nombreDeOrden: "felix"})

        .then((foundit) => {
          console.log(req.params)
       
          res.json(foundit)
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
