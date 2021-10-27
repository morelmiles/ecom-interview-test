const mongoose = require("mongoose");
const Role = require("./../models/Role");

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
