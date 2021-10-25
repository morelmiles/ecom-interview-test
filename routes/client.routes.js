const express = require("express");
const clientCtrl = require("../controllers/client.controller");
const router = express.Router();

//Routes for the client model
router.route("/api/v1/client").post(clientCtrl.createClient);
router.route("/api/v1/client/:clientId").get(clientCtrl.getClients);

router.route("/api/v1/client/:clientId").get(clientCtrl.getClient);
router.route("/api/v1/client/:clientId").put(clientCtrl.updateClient);
router.route("/api/v1/client/:clientId").delete(clientCtrl.deleteClient);
