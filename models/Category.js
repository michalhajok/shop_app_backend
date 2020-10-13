const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
