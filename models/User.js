const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      trim: true,
    },
    address: String,
    apartment: String,
    country: {
      type: String,
      required: "Country is required",
      trim: true,
    },
    postalCode: String,
    phoneNumber: Number,
    email: {
      type: String,
      trim: true,
      unique: "Email already exists",
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please fill a valid email address",
      ],
      required: "Email is required",
    },
    hashedPassword: {
      type: String,
      required: "Password is required",
    },
    salt: String,
  },

  { timestamps: true }
);

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// Helper method for authentication
UserSchema.methods = {
  authenticate: (plainText) => {
    return encryptPassword(plainText) === hashed_password;
  },
  encryptPassword: (password) => {
    if (!password) return "";
    try {
      return crypto.createHmac("sha1", salt).update(password).digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: () => {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", UserSchema);
