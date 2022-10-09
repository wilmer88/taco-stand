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
  },
  orginId: {
    type: Schema.Types.ObjectId,
    ref: "Orden",
    strictPopulate: true,
  },
});
drinksSchema.methods.getAguasOnlyPrice = function () {
  this.aguasPrice =
    this.largeHorchata * 4 + this.smallHorchata * 2;
  return this.aguasPrice;
};

drinksSchema.methods.addAllBebidasPrice = function () {
  allBeibidasPrice =
    this.fanta + this.coca + this.sprite * 2 + this.aguas.aguasPrice;
  return this.allBebidasPrice;
};

const drinks = mongoose.model("drinks", drinksSchema);

module.exports = drinks;
