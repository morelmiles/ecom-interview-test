const Product = require("../models/Product");

const Controller = {};

//createProduct adds a new product to the database
Controller.createProduct = (req, res) => {
  const newProduct = new Product({
    description: req.body.description,
    name: req.body.name,
    discount: req.body.discount,
    price: req.body.price,
    image: req.body.image,
    reviewStars: req.body.reviewStars,
  });

  newProduct.save((err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

// getProduct fetches a single product from the database
Controller.getProduct = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        product,
      });
    });
};

//getProducts returns all products
Controller.getProducts = (req, res) => {
  Product.find({})
    .populate("category")
    .exec((err, products) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        products,
      });
    });
};

//updateProduct updates a product in the database by it's id
Controller.updateProduct = (req, res) => {
  const { productId } = req.params;

  Product.findByIdAndUpdate(
    productId,
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      return res.status(201).json({
        ok: true,
        product,
      });
    }
  );
};

// deleteProduct deletes a product from the database by it's ID
Controller.deleteProduct = (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      product,
    });
  });
};

module.exports = Controller;
