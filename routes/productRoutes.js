const router = require("express").Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  const { codeBar, user, height, width, depth } = req.body;

  if (!codeBar) {
    res.status(422).json({ error: "Código de barras obrigatório!" });
  }

  const product = {
    codeBar,
    user,
    width,
    height,
    depth,
  };
  //create

  try {
    await Product.create(product);

    res.status(201).json({ message: "Produto cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
