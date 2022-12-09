const {Orden} = require("../models");
const db = require("../models");

module.exports = {

      searchOrder: function(req, res) {   
        db.Orden.findOne({nombreDeOrden:req.params.nombreDeOrden}).select({nombreDeOrden:1, _id: 0})
        .then((foundit) => {
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
