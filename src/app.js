const express = require("express");
const routes = require("./routes/index.js");
const db = require("./config/dbConnect.js");
const cors = require("cors");

db.on("error", console.log.bind(console), "Erro de conexão com o banco");
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

routes(app);

module.exports = app;
