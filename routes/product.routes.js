const express = require("express");
const productCtrl = require("../controllers/product.controller");
const router = express.Router();

//Routes for the Produc model
router.route("/").post(productCtrl.createProduct);
router.route("/").get(productCtrl.getProducts);

router.route("/:productId").get(productCtrl.getProduct);
router.route("/:productId").put(productCtrl.updateProduct);
router.route("/:productId").delete(productCtrl.deleteProduct);
