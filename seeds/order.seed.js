const mongoose = require("mongoose");
const Order = require("./../models/Order");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo connection is open ");
  })
  .catch((err) => {
    console.log(err);
  });

const seedOrders = [
  {
    client: "Luigi Morel ",
    serial: "12435454",
    total: 2,
  },
  {
    client: "Lorem Morel ",
    serial: "12435454",
    total: 2,
  },
  {
    client: "Luigi Morel ",
    serial: "12435454",
    total: 2,
  },
];

const seedDB = async () => {
  await Order.deleteMany({});
  await Order.insertMany(seedOrders);
};

seedDB().then(() => {
  mongoose.connection.close();
});
