const express = require("express");
const authCtrl = require("./../controllers/auth.controller");
const userCtrl = require("./../controllers/user.controller");
const router = express.Router();

//Routes for the users
router.route("/api/users").post(userCtrl.createUser);
router.route("/api/users").get(userCtrl.listUsers);
router.route("/api/users/:userId").get(userCtrl.readUserById);
router.route("/api/users/:userId").put(userCtrl.updateUserById);
router.route("/api/users/:userId").delete(userCtrl.deleteUserById);

//Require authorization so as to do the following operations
router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
