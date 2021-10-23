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

// Routes for the resources.
app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

//Listen to the requests
app.listen(process.env.PORT);
