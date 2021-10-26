const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is required",
    },
    body: {
      type: String,
      required: "Body is required",
    },
    coverImage: {
      type: String,
      required: "Cover Image is required",
    },
    tags: {
      type: String,
      required: "Tags are required",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
