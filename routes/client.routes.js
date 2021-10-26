const express = require("express");
const clientCtrl = require("../controllers/client.controller");
const router = express.Router();

//Routes for the client model

router.post("/", (req, res) => {
  clientCtrl.createClient;
});

router.get("/", (req, res) => {
  clientCtrl.getClients;
});

router.get("/:clientId", (req, res) => {
  clientCtrl.getClient;
});

router.put("/:clientId", (req, res) => {
  clientCtrl.updateClient;
});

router.delete("/:clientId", (req, res) => {
  clientCtrl.deleteClient;
});
