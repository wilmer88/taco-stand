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
    horchatasPrice: {
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
  allBebidasPrice: {
    type: Number,
  },
  allVerdurasPrice: {
    type: Number,
  },
  CanbebidasPrice: {
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

orginId: {
    type: Schema.Types.ObjectId,
    ref: "Orden",
  },
  
});
sideOrderSchema.methods.getHorchataPrice = function () {
  this.horchata.horchataPrice =
    this.horchata.large * 4 + this.horchata.large * 2
  return  this.horchata.horchataPrice;
};

sideOrderSchema.methods.verdurasTogether = function () {
  this.allVerdurasPrice =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa * 0.5;
  return this.allVerduras;
};
sideOrderSchema.methods.addingBebidasPrice = function () {
  allBeibidasPrice = this.fanta + this.coca + this.sprite + this.horchata.horchatasPrice;
  
  return this.allBebidasPrice
};

const SideOrderNdrinks = mongoose.model(
  "SideOrderNdrinks",
  sideOrderSchema
);

module.exports = SideOrderNdrinks;
