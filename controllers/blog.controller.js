const Blog = require("../models/Blog");

//Creates and saves a new blog to the database
const createBlog = (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    tags: req.body.tags,
    createdAt: req.body.createdAt,
  });

  console.log(newBlog);
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

const getBlog = (req, res) => {
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
const getBlogs = (req, res) => {
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
const updateBlog = (req, res) => {
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
const deleteBlog = (req, res) => {
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

export default { createBlog, getBlog, getBlogs, updateBlog, deleteBlog };
