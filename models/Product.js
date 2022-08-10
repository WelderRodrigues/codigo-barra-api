const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  codeBar: String,
  user: String,
  width: String,
  height: String,
  depth: String,
});

module.exports = Product;
