const mongoose = require("mongoose");
const {Schema} = mongoose;

const OrdenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    strictPopulate: false,


  },
  nombreDeOrden: {
    type: String,
    trim: true,

  },
  phoneNumber:{
    type: String,
    trim: true
  },
  tableNumber:{
    type: String,
    trim: true
  },


 combo: [],

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
  cancelar: {
    type: Boolean,
    default: false,
  },
  preparada: {
    type: Boolean,
    default: false,
  },
  pagado: {
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

OrdenSchema.virtual("tacosVirtual").get(function () {
  let cuantos = this.azada + this.pollo + this.barbacoa + this.pastor + this.chorizo;
  let tacosTotal = cuantos * 3;
  return tacosTotal;
});
OrdenSchema.virtual("topingVirtual").get(function () {
  let cuantosTopings = this.cebolla + this.cilantro + this.pico + this.redSalsa + this.greenSalsa;
  let allVerdurasPrice = cuantosTopings * .5;
  return allVerdurasPrice;
});
OrdenSchema.virtual("aguasVirtual").get(function () {
  let lH =  this.largeHorchata * 4;
  let sH = this.smallHorchata * 2
  let aguasPrice = lH + sH   
  return aguasPrice;
});
OrdenSchema.virtual("canDrinkVirtual").get(function () {
  let canDrinks = this.coca + this.sprite + this.fanta
  let candrinkPrice = canDrinks * 2
  return candrinkPrice;
});
OrdenSchema.virtual("comboVirtual").get(function () {
  if(combo){
    let camboCalculatedVirtual = 0;

    this.combo.forEach((conbo)=>{ camboCalculatedVirtual += +conbo.comboPrice})
   
    return camboCalculatedVirtual;

  }

});

const Orden = mongoose.model("Orden", OrdenSchema);
module.exports = Orden;
