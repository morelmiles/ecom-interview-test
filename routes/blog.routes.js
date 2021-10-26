const express = require("express");
const blogCtrl = require("../controllers/blog.controller");
const router = express.Router();

//Routes for the blog model
router.post("/", (req, res) => {
  blogCtrl.createBlog;
});

router.get("/:blogId", (req, res) => {
  blogCtrl.getBlog;
});

router.get("/", (req, res) => {
  blogCtrl.getBlogs;
});

router.put("/:blogId", (req, res) => {
  blogCtrl.updateBlog;
});

router.delete("/:blogId", (req, res) => {
  blogCtrl.updateBlog;
});
