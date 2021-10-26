const mongoose = require("mongoose");
const Order = require("./../models/Order");

mongoose
  .connect(
    "mongodb+srv://morel:757OVetCWYFoyB2J@cluster0.e0axj.mongodb.net/test?retryWrites=true&w=majority&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
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
