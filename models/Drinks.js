const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const drinksSchema = new Schema({
  largeHorchata: {
    type: Number,
    default: 0,
  },
  smallHorchata: {
    type: Number,
    default: 0,
  },
  aguasPrice: {
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
  allBebidasPrice: {
    type: Number,
    default: 0,
  },
  orderLink: {
    type: Schema.Types.ObjectId,
    ref: "Orden",
    strictPopulate: false,
  },
});
drinksSchema.methods.getAguasOnlyPrice = function () {
  let lH =  this.largeHorchata * 4;
  let sH = this.smallHorchata * 2
  this.aguasPrice = lH + sH
    
  return this.aguasPrice;
};

drinksSchema.methods.addAllBebidasPrice = function () {
  let canBebidas = this.fanta + this.coca + this.sprite;
  let canBebidasPrice = canBebidas * 2;
  this.allBebidasPrice = canBebidasPrice + this.aguasPrice;
  return this.allBebidasPrice;
};

const drinks = mongoose.model("drinks", drinksSchema);

module.exports = drinks;
