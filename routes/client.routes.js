const express = require("express");
const clientCtrl = require("../controllers/client.controller");
const router = express.Router();

//Routes for the client model
router.route("/").post(clientCtrl.createClient);
router.route("/").get(clientCtrl.getClients);

router.route("/:clientId").get(clientCtrl.getClient);
router.route("/:clientId").put(clientCtrl.updateClient);
router.route("/:clientId").delete(clientCtrl.deleteClient);
