const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CondimentosSchema = new Schema({
  cebolla: {
    type: Number,
    default: 0,
  },
  cilantro: {
    type: Number,
    default: 0,
  },
  pico: {
    type: Number,
    default: 0,
  },
  Rsalsa: {
    type: Number,
    default: 0,
  },
  Vsalsa: {
    type: Number,
    default: 0,
  },
  coca: {
    type: Number,
    default: 0,
  },
  sprite: {
    type: Number,
    default: 0,
  },
  fanta: {
    type: Number,
    default: 0,
  },
  allBebidas: {
    type: Number,
  },
  allVerduras: {
    type: Number,
  },
  bebidaPrice: {
    type: Number,
  },
  verduraPrice: {
    type: Number,
    
  },
  
  cancelar: {
    type: Boolean,
    default: false,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  
  conectcion: {
    type: Schema.Types.ObjectId,
    ref: "OrdenShema",
    strictPopulate: false,
  },
  tiempo: {
    type: Date,
    default: Date.now
  },

});

CondimentosSchema.methods.verdurasTogether = function () {
  this.allVerduras =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa;
  return this.allVerduras;
};
CondimentosSchema.methods.addingVerduraPrice = function () {
  let verduarasAddedtogetherPrice =
  this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa;
  this.priceOfVerduras = verduarasAddedtogetherPrice * .50;
  return this.verduarasAddedtogetherPrice;
};
const condimentosNdrinks = mongoose.model("condimentosNdrinks", CondimentosSchema);

module.exports = condimentosNdrinks;