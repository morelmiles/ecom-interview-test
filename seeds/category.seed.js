const mongoose = require("mongoose");
const Category = require("./../models/Category");

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

const seedCategories = [
  {
    name: "Baby products",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    inStock: true,
  },
  {
    name: "Shower products",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    inStock: false,
  },
  {
    name: "Kitchen",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    inStock: true,
  },
];

const seedDB = async () => {
  await Category.deleteMany({});
  await Category.insertMany(seedCategories);
};

seedDB().then(() => {
  mongoose.connection.close();
});
