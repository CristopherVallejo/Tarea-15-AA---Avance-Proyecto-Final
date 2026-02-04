const express = require("express");
const router = express.Router();

// Base de datos en memoria
let products = [];
let id = 1;

// GET - listar productos
router.get("/", (req, res) => {
  res.json(products);
});

// POST - crear producto
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || price == null || stock == null) {
    return res.status(400).json({ message: "Datos incompletos" });
  }

  const newProduct = {
    id: id++,
    name,
    price,
    stock
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT - actualizar producto
router.put("/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  const { name, price, stock } = req.body;
  if (name) product.name = name;
  if (price != null) product.price = price;
  if (stock != null) product.stock = stock;

  res.json(product);
});

// DELETE - eliminar producto
router.delete("/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Producto eliminado" });
});

module.exports = router;
