const express = require("express");
const roleCtrl = require("../controllers/role.controller");
const router = express.Router();

//Routes for the role model
router.post("/", (req, res) => {
  roleCtrl.createRole;
});

router.get("/", (req, res) => {
  roleCtrl.getRoles;
});

router.get("/:roleId", (req, res) => {
  roleCtrl.getRole;
});

router.put("/:roleId", (req, res) => {
  roleCtrl.updateRole;
});

router.delete("/:roleId", (req, res) => {
  roleCtrl.deleteRole;
});
