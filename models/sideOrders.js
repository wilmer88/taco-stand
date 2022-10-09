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
});

SideOrdenSchema.methods.verdurasTogether = function () {
  this.allVerdurasPrice =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa * 0.5;
  return this.allVerduras;
};

const SideOrden = mongoose.model(
  "SideOrden",
  SideOrdenSchema
);

module.exports = SideOrden;
