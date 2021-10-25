const express = require("express");
const categoryCtrl = require("../controllers.controller");
const router = express.Router();

//Routes for the category model
router.route("/").post(categoryCtrl.createClient);
router.route("/").get(categoryCtrl.getClients);

router.route("/:categoryId").get(categoryCtrl.getClient);
router.route("/:categoryId").put(categoryCtrl.updateClient);
router.route("/:categoryId").delete(categoryCtrl.deleteClient);
