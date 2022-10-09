const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SideOrdenSchema = new Schema({
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
  allVerdurasPrice: {
    type: Number,
  },
  mainOrden: 
    {
    type: Schema.Types.ObjectId,
    ref: "Orden", 
  }
});

SideOrdenSchema.methods.verdurasTogether = function () {
  let verdurasPrice =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa 
    this.allVerdurasPrice = verdurasPrice * .5
  return this.allVerdurasPrice;
};

const SideOrden = mongoose.model(
  "SideOrden",
  SideOrdenSchema
);

module.exports = SideOrden;
