const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compress = require("compression");
const morgan = require("morgan");

const orderRoutes = require("./routes/order.routes");
const productRoutes = require("./routes/product.routes");
const blogRoutes = require("./routes/blog.routes");
const categoryRoutes = require("./routes/category.routes");
const clientRoutes = require("./routes/client.routes");
const roleRoutes = require("./routes/role.routes");
const userRoutes = require("./routes/user.routes");

require("dotenv").config();

const app = express();

//Middleware
app.use(cors);
app.use(express.json());
app.use(helmet());
app.use(express.json({ extended: true }));
app.use(compress());
app.use(morgan("dev"));

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

//Routes for the different resources
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/role", roleRoutes);
app.use("/api/v1/user", userRoutes);

//Handle the unauthourized request error for the user route
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
  next();
});

//Listen to the requests
app.listen(process.env.PORT);
