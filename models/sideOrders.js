const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sideOrderSchema = new Schema({
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
  horchata: [
    {
    large: {
      type: Number,
      default:0,
    },
    small: {
      type: Number,
      default:0,
    },
    horchataPrice: {
      type: Number,
      default:0,
    }
  }
  ],
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

  tiempo: {
    type: Date,
    default: Date.now,
  },
});

sideOrderSchema.methods.verdurasTogether = function () {
  this.allVerduras =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa;
  return this.allVerduras;
};
sideOrderSchema.methods.addingVerduraPrice = function () {
  let verduarasAddedtogetherPrice =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa;
  this.priceOfVerduras = verduarasAddedtogetherPrice * 0.5;
  return this.verduarasAddedtogetherPrice;
};
sideOrderSchema.methods.getHorchataPrice = function () {
  this.horchata.horchataPrice =
    this.horchata.large * 4 + this.horchata.large * 2
  return  this.horchata.horchataPrice;
};
const SideOrderNdrinks = mongoose.model(
  "condimentosNdrinks",
  sideOrderSchema
);

module.exports = SideOrderNdrinks;
