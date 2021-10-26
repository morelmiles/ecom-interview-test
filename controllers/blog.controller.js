const Blog = require("../models/Blog");

const Controller = {};

//Creates and saves a new blog to the database
Controller.createBlog = (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    tags: req.body.tags,
    createdAt: req.body.createdAt,
  });

  // console.log(newBlog);
  newBlog.save((err, blog) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(200).json({
      ok: true,
      blog,
    });
  });
};

//Gets a single blog from the database

Controller.getBlog = (req, res) => {
  const { blogId } = req.params;

  Blog.findById(blogId).exec((err, blog) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(200).json({
      ok: true,
      blog,
    });
  });
};

// Gets many blog posts from the DB
Controller.getBlogs = (req, res) => {
  Blog.find({}).exec((err, blogs) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(200).json({
      ok: true,
      blogs,
    });
  });
};

//Updates a single blog in the database
Controller.updateBlog = (req, res) => {
  const { blogId } = req.params;

  Blog.findByIdAndUpdate(blogId, req.body, { new: true }, (err, blog) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      blog,
    });
  });
};

//Deletes a single blog from the database
Controller.deleteBlog = (req, res) => {
  const { blogId } = req.params;

  Blog.findByIdAndRemove(blogId, (err, blog) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      blog,
    });
  });
};

module.exports = Controller;
