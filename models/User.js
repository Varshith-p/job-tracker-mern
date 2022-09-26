const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide username..."],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Provide email..."],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Provide a valid email...",
    },
  },
  password: {
    type: String,
    required: [true, "Provide password..."],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "",
  },
});

module.exports = mongoose.model("User", UserSchema);
