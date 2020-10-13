const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    const newCategory = new Category({
      category: req.body.category,
    });
    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (error) {
    console.log(req.body);
    res.status(400).send(error);
  }
});

module.exports = router;
