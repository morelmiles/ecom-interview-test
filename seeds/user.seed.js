const mongoose = require("mongoose");
const User = require("./../models/User");

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

const seedUsers = [
  {
    name: "Lorem Ipsum",
    address: "Kampala",
    country: "Uganda",
    postalCode: "23433",
    phoneNumber: 12325546578,
    email: "test@test.com",
    hashedPassword: "23245566743",
    salt: "salt",
  },
  {
    name: "Lorem Ipsum",
    address: "Kampala",
    country: "Uganda",
    postalCode: "23433",
    phoneNumber: 12325546578,
    email: "test@test.com",
    hashedPassword: "23245566743",
    salt: "salt",
  },
  {
    name: "Lorem Ipsum",
    address: "Kampala",
    country: "Uganda",
    postalCode: "23433",
    phoneNumber: 12325546578,
    email: "test@test.com",
    hashedPassword: "23245566743",
    salt: "salt",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedDB().then(() => {
  mongoose.connection.close();
});
