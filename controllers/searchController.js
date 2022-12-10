
const {Orden} = require("../models");


module.exports = {

      searchOrder: function(req, res) {   
       
       
        Orden.find({nombreDeOrden: req.params.keyword})
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
