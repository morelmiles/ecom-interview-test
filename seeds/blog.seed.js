const mongoose = require("mongoose");
const Blog = require("./../models/Blog");

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

const seedBlogs = [
  {
    title: "This is the purest milk you will get",
    tags: "Milk",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae voluptatem corrupti in sit nostrum, commodi tenetur quae harum quia.",
    coverImage: "https://unsplash.com/photos/164_6wVEHfI",
    createdAt: Date.now(),
  },
  {
    title: "This is the purest milk you will get",
    tags: "Milk",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae voluptatem corrupti in sit nostrum, commodi tenetur quae harum quia.",
    coverImage: "https://unsplash.com/photos/164_6wVEHfI",
    createdAt: Date.now(),
  },
  {
    title: "This is the purest milk you will get",
    tags: "Milk",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae voluptatem corrupti in sit nostrum, commodi tenetur quae harum quia.",
    coverImage: "https://unsplash.com/photos/164_6wVEHfI",
    createdAt: Date.now(),
  },
];

const seedDB = async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(seedBlogs);
};

seedDB().then(() => {
  mongoose.connection.close();
});
