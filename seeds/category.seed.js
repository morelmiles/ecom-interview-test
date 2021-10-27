const mongoose = require("mongoose");
const Category = require("./../models/Category");

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
