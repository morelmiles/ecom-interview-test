const express = require("express");
const categoryCtrl = require("../controllers/category.controller");
const router = express.Router();

//Routes for the category model
router.get("/", (req, res) => {
  categoryCtrl.createCategory;
});

router.get("/:categoryId", (req, res) => {
  categoryCtrl.getCategory;
});

router.get("/", (req, res) => {
  categoryCtrl.getCategories;
});

router.put("/:categoryId", (req, res) => {
  blogCtrl.updateBlog;
});

router.delete("/:categoryId", (req, res) => {
  categoryCtrl.deleteCategory;
});
