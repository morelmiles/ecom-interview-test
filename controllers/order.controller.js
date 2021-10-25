const Order = require("../models/Order");
const Product = require("../models/Product");

const getOrders = (req, res) => {
  Order.find({})
    .populate("client")
    .populate("orderItems.product")
    .exec((err, orders) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        orders,
      });
    });
};

const getOrder = (req, res) => {
  const { orderId } = req.params;
  Order.findById(orderId).exec((err, order) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      order,
    });
  });
};

const createOrder = (req, res) => {
  validateStock(req.body.orderItems, (cartItems) => {
    if (cartItems == false) {
      return res.status(500).json({
        ok: false,
        msg: "The product is not available at the moment.",
      });
    }

    const newOrder = new Order({
      client: req.body.client,
      serial: req.body.serial,
      total: req.body.total,
      orderItems: cartItems,
    });

    newOrder.save((err, order) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        order,
      });
    });
  });
};

const deleteOrder = (req, res) => {
  const { orderId } = req.params;
  Order.findByIdAndRemove(orderId, (err, order) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      order,
    });
  });
};

const validateStock = (products, cb) => {
  const products_id = [];

  const cartItems = [];

  products.forEach((elem) => {
    products_id.push(elem.product_id);
  });

  Product.find({})
    .where("_id")
    .in(products_id)
    .exec(async (err, data) => {
      for (const i of data) {
        let newQty = products.find((p) => p.product_id == i._id).qty;

        if (newQty <= i.stock) {
          const modify = await Product.findByIdAndUpdate(i._id, {
            stock: i.stock - newQty,
          });

          if (modify != false) {
            cartItems.push({
              product: i._id,
              qty: newQty,
            });
          }

          console.log(cartItems);
        }
      }

      cb(cartItems.length == 0 ? false : cartItems);
    });
};

export default { getOrders, getOrder, createOrder, deleteOrder, validateStock };
