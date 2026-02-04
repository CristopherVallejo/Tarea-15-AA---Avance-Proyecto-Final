const API = "http://localhost:4000/api/products";

async function render() {
  const res = await fetch(API);
  const products = await res.json();
  
  const totalValue = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
  const lowStock = products.filter(p => p.stock < 10).length;

  document.getElementById("root").innerHTML = `
    <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem">
      <h1>📦 Mis Productos</h1>
      <button class="btn-add" onclick="createProduct()">+ Agregar Producto</button>
    </header>

    <div class="dashboard-grid">
      <div class="stat-card" style="border-color: #3b82f6"><h3>${products.length}</h3><p>Total Productos</p></div>
      <div class="stat-card" style="border-color: #22c55e"><h3>$${totalValue.toFixed(2)}</h3><p>Valor Inventario</p></div>
      <div class="stat-card" style="border-color: #f59e0b"><h3>${lowStock}</h3><p>Stock Bajo</p></div>
    </div>

    <div id="list">
      ${products.map(p => `
        <div class="product-card">
          <div>
            <h3 style="margin:0">${p.name}</h3>
            <small style="color:64748b">SKU: ${p.sku || 'N/A'}</small>
          </div>
          <div style="display:flex; gap:2rem; align-items:center">
            <div class="${p.stock < 10 ? 'badge-stock' : ''}">Cant: ${p.stock}</div>
            <div style="font-weight:bold; font-size:1.2rem">$${p.price}</div>
            <button onclick="deleteProduct(${p.id})" style="background:none; border:none; cursor:pointer">🗑️</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.deleteProduct = async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  render();
};

window.createProduct = async () => {
  const name = prompt("Nombre:");
  if(name) {
    await fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, price: 100, stock: 5, sku: "NEW-001" })
    });
    render();
  }
};

render();