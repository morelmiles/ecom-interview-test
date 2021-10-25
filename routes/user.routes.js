const express = require("express");
const authCtrl = require("./../controllers/auth.controller");
const userCtrl = require("./../controllers/user.controller");
const router = express.Router();

//Routes for the users
router.route("/api/v1/users").post(userCtrl.createUser);
router.route("/api/v1/users").get(userCtrl.listUsers);
router.route("/api/v1/users/:userId").get(userCtrl.readUserById);
router.route("/api/v1/users/:userId").put(userCtrl.updateUserById);
router.route("/api/v1/users/:userId").delete(userCtrl.deleteUserById);

//Require authorization so as to do the following operations
router
  .route("/api/v1/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
