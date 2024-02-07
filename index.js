const express = require("express");
const app = express();
const connectToDatabase = require("./database/connect");
//const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

connectToDatabase();

app.use(express.json());
//app.use(cors());

// Importe as rotas de cardKanban
const cardKanbanRoutes = require("./routes/routes");

// Use as rotas de cardKanban
app.use("/cardKanban", cardKanbanRoutes);

// Outros middlewares e configurações...

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
