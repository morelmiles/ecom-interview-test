const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    description: {
      type: String,
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

module.exports = mongoose.model("Product", ProductSchema);
