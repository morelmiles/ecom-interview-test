const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
