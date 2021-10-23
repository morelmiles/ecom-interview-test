const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    apartment: String,
    country: String,
    postalCode: String,
    phoneNumber: Number,
    email: { type: String, required: true },
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.Model("User", userSchema);
