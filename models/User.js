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
  userRole: {
    type: String,
    // unique: true,
    trim: true,
    required: "user role is Required",
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Orden",
    // unique: true,
    trim: true,
    // required: "phone number is Required",
  }],
  
  password: {
    type: String,
    required: "password is Required",
    trim:true
  }

});
const User = mongoose.model("User", UserSchema);

module.exports = User;
