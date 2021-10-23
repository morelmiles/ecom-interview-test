const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
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
