const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: " Name is required",
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
