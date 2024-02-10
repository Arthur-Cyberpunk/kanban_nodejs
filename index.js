const express = require("express");
const app = express();
const connectToDatabase = require("./database/connect");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

connectToDatabase();

app.use(express.json());
app.use(cors());

const cardKanbanRoutes = require("./routes/routes");

app.use("/cardKanban", cardKanbanRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Servidor rodando na porta 3001");
});
