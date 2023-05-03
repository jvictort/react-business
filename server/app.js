const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

app.get('/', (req, res) => {
  res.json({ message: "Primeiro commit" });
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
