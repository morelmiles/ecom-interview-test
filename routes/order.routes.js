const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const router = express.Router();

//Routes for the Order model
router.post("/", (req, res) => {
  orderCtrl.createOrder;
});

router.get("/", (req, res) => {
  orderCtrl.getOrders;
});

router.get("/:orderId", (req, res) => {
  orderCtrl.getOrders;
});
router.put("/:orderId", (req, res) => {
  orderCtrl.updateOrder;
});

router.delete("/:orderId", (req, res) => {
  orderCtrl.deleteOrder;
});
