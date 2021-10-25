const express = require("express");
const blogCtrl = require("../controllers/blog.controller");
const router = express.Router();

//Routes for the blog model
router.route("/api/v1/blog").post(blogCtrl.createBlog);
router.route("/api/v1/blog").get(blogCtrl.getBlogs);

router.route("/api/v1/blog/:blogId").get(blogCtrl.getBlog);
router.route("/api/v1/blog/:blogId").put(blogCtrl.updateBlog);
router.route("/api/v1/blog/:blogId").delete(blogCtrl.deleteBlog);
