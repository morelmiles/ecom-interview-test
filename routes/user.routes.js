const express = require("express");
const authCtrl = require("./../controllers/auth.controller");
const userCtrl = require("./../controllers/user.controller");
const router = express.Router();

//Routes for the users
router.route("/").post(userCtrl.createUser);
router.route("/").get(userCtrl.listUsers);
router.route("/:userId").get(userCtrl.readUserById);
router.route("/:userId").put(userCtrl.updateUserById);
router.route("/:userId").delete(userCtrl.deleteUserById);

//Require authorization so as to do the following operations
router
  .route("/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
