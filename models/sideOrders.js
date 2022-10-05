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
  aguas: [
    {
    largeHorchata: {
      type: Number,
      default:0,
    },
    smallHorchata: {
      type: Number,
      default:0,
    },
    aguasPrice: {
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
  completeSideOrderPrice: {
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
sideOrderSchema.methods.getAguasOnlyPrice = function () {
  this.aguas.aguasPrice =
    this.aguas.largeHorchata * 4 + this.aguas.smallHorchata * 2
  return  this.aguas.aguasPrice;
};

sideOrderSchema.methods.verdurasTogether = function () {
  this.allVerdurasPrice =
    this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa * 0.5;
  return this.allVerduras;
};

sideOrderSchema.methods.addAllBebidasPrice = function () {
  allBeibidasPrice = this.fanta + this.coca + this.sprite * 2 + this.aguas.aguasPrice;
  return this.allBebidasPrice
};

sideOrderSchema.methods.addSideOrderTotal = function () {
  completeSideOrderPrice = this.allBeibidasPrice + this.allVerdurasPrice;
  return this.completeSideOrderPrice
};
const SideOrderNdrinks = mongoose.model(
  "SideOrderNdrinks",
  sideOrderSchema
);

module.exports = SideOrderNdrinks;
