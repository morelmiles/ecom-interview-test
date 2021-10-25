const express = require("express");
const roleCtrl = require("../controllers/role.controller");
const router = express.Router();

//Routes for the role model
router.route("/").post(clientCtrl.createClient);
router.route("/").get(clientCtrl.getClients);

router.route("/:clientId").get(clientCtrl.getClient);
router.route("/:clientId").put(clientCtrl.updateClient);
router.route("/:clientId").delete(clientCtrl.deleteClient);
