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
  allVerdurasPrice:{
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


  aguasPrice: {
    type: Number,
    default: 0,
  },

  canDrinkPrice: {
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
  
},

{toJSON:{virtuals: true}},

);

OrdenSchema.virtual("testVirtual").get(function () {
  let verdurasPrice = this.cebolla + this.cilantro 
    
  return  verdurasPrice * .5
});
OrdenSchema.methods.getTacoPrice = function () {
  let cuantos = this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  this.tacosTotal = cuantos * 3;
  return this.tacosTotal;
};

OrdenSchema.methods.getTopingPrice = function () {
  let cuantosTopings = this.cebolla + this.cilantro + this.pico + this.redSalsa + this.greenSalsa;
  this.allVerdurasPrice = cuantosTopings * .5;
  return this.allVerdurasPrice;
};

OrdenSchema.methods.getAguasOnlyPrice = function () {
  let lH =  this.largeHorchata * 4;
  let sH = this.smallHorchata * 2
  this.aguasPrice = lH + sH
    
  return this.aguasPrice;
};
OrdenSchema.methods.getCanDrinkPrice = function () {
  this.canDrinkPrice = this.coca +this.sprite + this.fanta * 2
  return this.canDrinkPrice;
};

OrdenSchema.methods.addTotal = function () {
 this.ordenTotal = this.canDrinkPrice + this.tacosTotal + this.allVerdurasPrice + this.aguasPrice
  return this.ordenTotal
};

const Orden = mongoose.model("Orden", OrdenSchema);
module.exports = Orden;
