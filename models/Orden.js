const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  xOrden: [{
    type: Schema.Types.ObjectId,
    ref: "SideOrden",
  }],
  drinks: [{
    type: Schema.Types.ObjectId,
    ref: "drink",
    strictPopulate: true,
  }],
  tacosTotal: {
    type: Number,
  },
  ordenPrice: {
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
  timeCreated: {
    type: Date,
    default: Date.now
  },

});

OrdenSchema.methods.getPrecio = function () {
  let cuantos =
    this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  this.tacosTotal = cuantos * 3;
  return this.tacosTotal;
};
OrdenSchema.methods.addTacoTotalSideOrderNDrinks = function () {
  this.ordenPrice = this.drinks.allBeibidasPrice + this.sideOrden.allVerdurasPrice + tacosTotal;
  return this.ordenPrice;
};
const Orden = mongoose.model("Orden", OrdenSchema);

module.exports = Orden;
