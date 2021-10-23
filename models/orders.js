const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderDesc: String,
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Order", orderSchema);
