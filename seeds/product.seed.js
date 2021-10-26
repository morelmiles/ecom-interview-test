const mongoose = require("mongoose");
const Product = require("./../models/Product");

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

const seedProducts = [
  {
    description: "This is the purest milk you will get",
    name: "Milk",
    discount: 0,
    price: 234,
    image: "https://unsplash.com/photos/164_6wVEHfI",
    reviewStars: 0,
  },
  {
    description: "This is the best cereal  ",
    name: "Cereal",
    discount: 0,
    price: 54,
    image: "https://unsplash.com/photos/164_6wVEHfI",
    reviewStars: 0,
  },
  {
    description: "These are the best sweets around",
    name: "Sweets ",
    discount: 0,
    price: 11,
    image: "https://unsplash.com/photos/164_6wVEHfI",
    reviewStars: 0,
  },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
};

seedDB().then(() => {
  mongoose.connection.close();
});
