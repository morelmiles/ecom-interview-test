const express = require("express");
const productCtrl = require("../controllers/product.controller");
const router = express.Router();

//Routes for the Produc model
router.route("/api/v1/product").post(productCtrl.createProduct);
router.route("/api/v1/product/:productId").get(productCtrl.getProducts);

router.route("/api/v1/product/:productId").get(productCtrl.getProduct);
router.route("/api/v1/product/:productId").put(productCtrl.updateProduct);
router.route("/api/v1/product/:productId").delete(productCtrl.deleteProduct);
