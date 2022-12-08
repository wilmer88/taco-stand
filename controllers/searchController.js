

const dbs = require("../models");
const laCollection = dbs.Orden



module.exports = {

      
      searchOrder: function(req, res) {
      
        laCollection.findO( {nombreDeOrden: req.params.nombreDeOrden} )
        .then((foundit) => {
          console.log(req.params.nombreDeOrden)
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
