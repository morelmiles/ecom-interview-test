const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", RoleSchema);
