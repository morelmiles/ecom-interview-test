const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: "Name is required",
    },
    discount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: "Price is required",
      default: 0,
    },
    reviewStars: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
