const mongoose = require("mongoose");
const Role = require("./../models/Role");

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

const seedRoles = [
  {
    role: "Admin",
    status: true,
  },
  {
    role: "Client",
    status: true,
  },
  {
    role: "Client",
    status: true,
  },
];

const seedDB = async () => {
  await Role.deleteMany({});
  await Role.insertMany(seedRoles);
};

seedDB().then(() => {
  mongoose.connection.close();
});
