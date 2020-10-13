const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:category", async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.category });
    res.json(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/product/:_id", async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params._id });
    res.json(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/add", async (req, res) => {
  const {
    category,
    type,
    title,
    brand,
    description,
    price,
    size,
    picture,
  } = req.body;
  const product = new Product({
    category: category,
    type: type,
    title: title,
    brand: brand,
    description: description,
    price: price,
    size: size,
    picture: picture,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", (req, res, next) => {
  Product.findOneAndRemove({ _id: req.params.id }, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
