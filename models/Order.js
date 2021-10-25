const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    orderItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        qty: Number,
      },
    ],
    serial: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
