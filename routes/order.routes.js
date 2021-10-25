const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const router = express.Router();

//Routes for the Order model
router.route("/").post(orderCtrl.createOrder);
router.route("/").get(orderCtrl.getOrders);

router.route("/:orderId").get(orderCtrl.getOrder);
router.route("/:orderId").put(orderCtrl.updateOrder);
router.route("/:orderId").delete(orderCtrl.deleteOrder);
