const express = require("express");
const authCtrl = require("./../controllers/auth.controller");
const userCtrl = require("./../controllers/user.controller");
const router = express.Router();

//Routes for the users
router.post("/", (req, res) => {
  userCtrl.createUser;
});

router.get("/:userId", (req, res) => {
  authCtrl.requireSignin;
  userCtrl.readUserById;
});

router.put("/:userId", (req, res) => {
  authCtrl.requireSignin;
  authCtrl.hasAuthorization;
  userCtrl.updateUserById;
});

router.get("/", (req, res) => {
  userCtrl.listUsers;
});

router.delete("/:userId", (req, res) => {
  userCtrl.deleteUserById;
  authCtrl.requireSignin;
  authCtrl.hasAuthorization;
});
