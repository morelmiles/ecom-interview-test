const mongoose = require("mongoose");
const Client = require("./../models/Client");

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
