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
  sides: {
    type: Schema.Types.ObjectId,
    ref: "sides",
    strictPopulate: false,
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

const Orden = mongoose.model("Orden", OrdenSchema);
module.exports = Orden;
