const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send(`Hello World<br/> The port <b>${port}</b> is running!`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
