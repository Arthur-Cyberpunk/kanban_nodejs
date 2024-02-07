const express = require("express");
const app = express();
const connectToDatabase = require("./database/connect");
const dotenv = require("dotenv");

dotenv.config();

connectToDatabase();

app.use(express.json());

const cardKanbanRoutes = require("./routes/routes");

app.use("/cardKanban", cardKanbanRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
