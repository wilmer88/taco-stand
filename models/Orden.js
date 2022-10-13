const { JsonWebTokenError } = require("jsonwebtoken");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const drinks = require("./Drinks")
const dbfor = require("../models");


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

  BebidasPrice: {
    type: Schema.Types.ObjectId,
    ref: "drinks",
    strictPopulate: false,
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

OrdenSchema.methods.getPrice = function () {
  console.log(this.BebidasPrice)
 
};



// {
//   $lookup:
//   {
//      from: drinks;
//      localField : this.allBebidasPrice;
//      foreignField: drinks.bebidasPrice;
//      as: this.allBebidasPrice
//   }
// }
// let me = this
//   let tt = this.tacosTotal
//   let exam = this.drinksPrice


// drinks.findById(exam).then((hopeI)=>{
// aggregate(
//     [
//       {$project: {ordenTotal: {$add: [tt, hopeI.allBebidasPrice]}} }
//     ]
// )
//   .then((finishedPromise)=>{



//   }).catch((err) => {
//     console.log(err);
//   });
// }) .catch((err) => {
//   console.log(err);
 
// });
// Orden.updateOne(this.ordenTotal,).then((what)=> {

//  this.ordenTotal = tt + what.allBebidasPrice
// return  this.ordenTotal
// })
// console.log(this.OrdenSchema)



// }

// const exam = this.drinksPrice

// drinks.findById(exam).then((what)=>{
// Orden.aggregate([
//   { $project:{ordenTotal:{$sum: [what.allBebidasPrice, this.tacosTotal]}}}
//   ])
// })

//  console.log(found.allBebidasPrice)
//  return  this.ordenTotal =  this.tacosTotal + bprice
//   return drinkvar.allBebidasPrice


// OrdenSchema.aggregate([
//     {
//       $project: {
//         ordenTotal: { $sum: [ "$drinksPrice", "$tacoTotal" ] }
//       }
//     }]);


const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
// OrdenSchema.methods.addEverything = function () {
//    this.ordenTotal = this.drinksPrice.allBebidasPrice + this.tacosTotal ;
//   return this.ordenTotal;
// };
//  Orden.findById(this._id).then((encuentro)=>{
//   console.log(encuentro)
//  }).catch((err) => {
//   console.log(err);
         
// })