const mongoose = require("mongoose");
const {Schema }= mongoose;
const sidesSchema = new Schema({
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
  redSalsa: {
    type: Number,
    default: 0,
  },
  greenSalsa: {
    type: Number,
    default: 0,
  },

  largeHorchata: {
    type: Number,
    default: 0,
  },
  smallHorchata: {
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
  allVerdurasPrice: {
    type: Number,
    default: 0,
  },

  aguasPrice: {
    type: Number,
    default: 0,
  },
  orderLink: {
    type: Schema.Types.ObjectId,
    ref: "Orden",
    strictPopulate: false, 
  },
  allSidesPrice: {
    type: Number,
    default: 0,
  },
});
sidesSchema.methods.verdurasTogether = function () {
  let verdurasPrice = this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa 
    this.allVerdurasPrice = verdurasPrice * .5
  return this.allVerdurasPrice;
};
sidesSchema.methods.getAguasOnlyPrice = function () {
  let lH =  this.largeHorchata * 4;
  let sH = this.smallHorchata * 2
  this.aguasPrice = lH + sH
    
  return this.aguasPrice;
};

sidesSchema.methods.addAllsides = function () {
  let canBebidas = this.fanta + this.coca + this.sprite;
  let cansides = canBebidas * 2;
  this.allSidesPrice = cansides + this.aguasPrice + allVerdurasPrice;
  return this.allSidesPrice;
};

const Sides = mongoose.model("sides", sidesSchema);

module.exports = Sides;
