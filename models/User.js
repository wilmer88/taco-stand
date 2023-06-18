const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
    type: String,
    // unique: true,
    trim: true,
    required: "user Name is Required",
  },
  phoneNum: {
    type: String,
    // unique: true,
    trim: true,
    // required: "phone number is Required",
  },
  orders: [{
    type: Schema.Types.ObjectId,
    // unique: true,
    trim: true,
    // required: "phone number is Required",
  }],
  
  password: {
    type: String,
    ref: "Orden",
  }

});
const User = mongoose.model("User", UserSchema);

module.exports = User;
