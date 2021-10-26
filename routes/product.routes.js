const express = require("express");
const productCtrl = require("../controllers/product.controller");

const router = express.Router();

//Routes for the Produc model
router.post("/", (req, res) => {
  productCtrl.createProduct;
});

router.get("/", (req, res) => {
  productCtrl.getProducts;
});

router.get("/:productId", (req, res) => {
  productCtrl.getProduct;
});

router.put("/:productId", (req, res) => {
  productCtrl.updateProduct;
});

router.delete("/:productId", (req, res) => {
  productCtrl.deleteProduct;
});

module.exports = router;
