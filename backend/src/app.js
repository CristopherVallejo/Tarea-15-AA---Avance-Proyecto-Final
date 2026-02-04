const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Monitor Dell 24", price: 249.99, stock: 8, sku: "MON-002", category: "Electrónicos" },
  { id: 2, name: "Teclado Logitech K380", price: 39.99, stock: 25, sku: "TEC-003", category: "Electrónicos" },
  { id: 3, name: "Silla Ergonómica", price: 299.0, stock: 12, sku: "SIL-001", category: "Oficina" }
];

// GET - Listar
app.get("/api/products", (req, res) => res.json(products));

// POST - Crear (Postman: POST http://localhost:4000/api/products)
app.post("/api/products", (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT - Actualizar producto (Ideal para Postman)
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    return res.json(products[index]);
  }
  res.status(404).json({ message: "No encontrado" });
});
// DELETE - Eliminar (Postman: DELETE http://localhost:4000/api/products/1)
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Eliminado" });
});

app.listen(4000, () => console.log("🚀 Backend en puerto 4000"));