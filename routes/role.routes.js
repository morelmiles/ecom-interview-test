const express = require("express");
const roleCtrl = require("../controllers/role.controller");
const router = express.Router();

//Routes for the role model
router.route("/api/v1/client").post(clientCtrl.createClient);
router.route("/api/v1/client/:clientId").get(clientCtrl.getClients);

router.route("/api/v1/client/:clientId").get(clientCtrl.getClient);
router.route("/api/v1/client/:clientId").put(clientCtrl.updateClient);
router.route("/api/v1/client/:clientId").delete(clientCtrl.deleteClient);
