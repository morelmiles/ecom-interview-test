const mongoose = require("mongoose");
const Client = require("./../models/Client");

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

const seedClients = [
  {
    displayName: "Lorem Ipsum",
    address: "Lorem 123",
    phone: 12343546,
    status: true,
  },
  {
    displayName: "Lorem Ipsum",
    address: "Lorem 123",
    phone: 12343546,
    status: true,
  },
  {
    displayName: "Lorem Ipsum",
    address: "Lorem 123",
    phone: 12343546,
    status: true,
  },
];

const seedDB = async () => {
  await Client.insertMany(seedClients);
};

seedDB().then(() => {
  mongoose.connection.close();
});
