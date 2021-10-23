const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compress = require("compression");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors);
app.use(express.json());
app.use(helmet());
app.use(express.json({ extended: true }));
app.use(compress());

//Database connection
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected successfully");
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

//Listen to the requests
app.listen(process.env.PORT);
