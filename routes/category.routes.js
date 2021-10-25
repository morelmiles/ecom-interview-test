const express = require("express");
const categoryCtrl = require("../controllers/category.controller");
const router = express.Router();

//Routes for the category model
router.route("/api/v1/category").post(categoryCtrl.createClient);
router.route("/api/v1/category/:categoryId").get(categoryCtrl.getClients);

router.route("/api/v1/category/:categoryId").get(categoryCtrl.getClient);
router.route("/api/v1/category/:categoryId").put(categoryCtrl.updateClient);
router.route("/api/v1/category/:categoryId").delete(categoryCtrl.deleteClient);
