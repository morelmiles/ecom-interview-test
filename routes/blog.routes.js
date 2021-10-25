const express = require("express");
const blogCtrl = require("../controllers/blog.controller");
const router = express.Router();

//Routes for the blog model
router.route("/").post(blogCtrl.createBlog);
router.route("/").get(blogCtrl.getBlogs);

router.route("/:blogId").get(blogCtrl.getBlog);
router.route("/:blogId").put(blogCtrl.updateBlog);
router.route("/:blogId").delete(blogCtrl.deleteBlog);
