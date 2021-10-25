const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const router = express.Router();

//Routes for the Order model
router.route("/api/v1/order").post(orderCtrl.createOrder);
router.route("/api/v1/order/:orderId").get(orderCtrl.getOrders);

router.route("/api/v1/order/:orderId").get(orderCtrl.getOrder);
router.route("/api/v1/order/:orderId").put(orderCtrl.updateOrder);
router.route("/api/v1/order/:orderId").delete(orderCtrl.deleteOrder);
