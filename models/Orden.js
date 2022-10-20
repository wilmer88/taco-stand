const mongoose = require("mongoose");
const {Schema} = mongoose;

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

  allSidesPrice: {
    type: Number,
    default: 0,
  },
  tacosTotal: {
    type: Number,
    default: 0,
  },
  ordenTotal: {
    type: Number,
    default: 0,
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

OrdenSchema.methods.getTacoPrice = function () {
  let cuantos = this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  this.tacosTotal = cuantos * 3;
  return this.tacosTotal;
};
OrdenSchema.methods.verdurasTogether = function () {
  let verdurasPrice = this.cebolla + this.cilantro + this.pico + this.Rsalsa + this.Vsalsa 
    this.allVerdurasPrice = verdurasPrice * .5
  return this.allVerdurasPrice;
};
OrdenSchema.methods.getAguasOnlyPrice = function () {
  let lH =  this.largeHorchata * 4;
  let sH = this.smallHorchata * 2
  this.aguasPrice = lH + sH
    
  return this.aguasPrice;
};

OrdenSchema.methods.addAllsides = function () {
  let canBebidas = this.fanta + this.coca + this.sprite;
  let cansides = canBebidas * 2;
  this.allSidesPrice = cansides + this.aguasPrice + allVerdurasPrice;
  return this.allSidesPrice;
};

const Orden = mongoose.model("Orden", OrdenSchema);
module.exports = Orden;
