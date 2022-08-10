const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
var cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors());

//rotas da api
const productRoutes = require("./routes/productRoutes");

app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Deu certo" });
});

mongoose
  .connect(
    "mongodb+srv://barcode:barcode@cluster0.a1oquvn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conectado ao mongoDB");
    app.listen(3333);
  });
