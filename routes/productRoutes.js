const router = require("express").Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  const { codeBar, user, height, width, depth } = req.body;

  if (!codeBar) {
    res.status(422).json({ error: "Código de barras obrigatório!" });
    return;
  }

  const product = {
    codeBar,
    user,
    width,
    height,
    depth,
  };
  //Create criando dados

  try {
    await Product.create(product);

    res.status(201).json({ message: "Produto cadastrado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Read - leitura dos dados

//Busca todos os dados

router.get("/", async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Buscar um usuário
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findOne({ _id: id });

    if (!product) {
      res.status(422).json({ message: "Produto não encontrado." });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
