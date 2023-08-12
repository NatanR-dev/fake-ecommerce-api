const express = require("express");
const cors = require("cors");
const items = require("./data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    `<div style="text-align: center">
        <strong>Bem-vindo à API fake-ecommerce!</strong><br/>
        Acesse a rota <a href="/api/items">/api/items</a> para obter os produtos.
     </div>`
  );
});

app.get("/api/items", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    const limitedItems = items.slice(0, limit);
    res.json(limitedItems);
  } else {
    res.status(400).json({ error: "Invalid Limit Parameter." });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
