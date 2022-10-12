const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const drinks = require("./Drinks")

const OrdenSchema = new Schema({
  clienteId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    strictPopulate: false,
  },
  nombreDeOrden: {
    type: String,
    trim: true,
    required: "nombrDeOrden is required"
  },
  azada: {
    type: Number,
    default: 0,
  },
  pollo: {
    type: Number,
    default: 0,
  },
  barbacoa: {
    type: Number,
    default: 0,
  },
  pastor: {
    type: Number,
    default: 0,
  },
  chorizo: {
    type: Number,
    default: 0,
  },
  xOrden: 
    {
    type: Schema.Types.ObjectId,
    ref: "SideOrden",
  },

  drinksPrice: {
    type: Schema.Types.ObjectId,
    ref: "drinks",
    strictPopulate: false,
    default: 0,

  },
  tacosTotal: {
    type: Number,
    default: 0,

  },
  ordenTotal: {
    type: Number,
    default: 0,

  },


  cancelar: {
    type: Boolean,
    default: false,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  timeCreated: {
    type: Date,
    default: Date.now
  },
 

});


OrdenSchema.methods.getTacoPrice = function () {
  let cuantos = this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  this.tacosTotal = cuantos * 3;
  return this.tacosTotal;
};


// OrdenSchema.aggregate([
//     {
//       $project: {
//         ordenTotal: { $sum: [ "$drinksPrice", "$tacoTotal" ] }
//       }
//     }]);

OrdenSchema.methods.addEverything = function () {
  var Helper = require('path_to_the_module_where_the_method_check_is_defined_and_exported');

  function verifyOTP(user) {
      var position = user.position;
      var operation = user.operation;
      var useripp = user.userip;
      Helper.check(position, operation, useripp);
  };
  
  var query = {
      // Your query here
  };
  
  var projection = {
       position: 1,
       operation: 1,
       userip: 1,
       _id: 0
  };
  
  User.findOne( query, projection, function(err, user) {
      if(err) console.log("Error: " + JSON.stringify(err));
      if(user) verifyOTP(user);
  });
};







const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
// OrdenSchema.methods.addEverything = function () {
//    this.ordenTotal = this.drinksPrice.allBebidasPrice + this.tacosTotal ;
//   return this.ordenTotal;
// };
