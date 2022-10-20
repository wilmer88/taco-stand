const mongoose = require("mongoose");
const {Schema }= mongoose;
const sidesSchema = new Schema({

});


const Sides = mongoose.model("sides", sidesSchema);

module.exports = Sides;
