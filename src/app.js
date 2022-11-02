const express = require("express");
const routes = require("./routes/index.js");
const db = require("./config/dbConnect.js");

db.on("error", console.log.bind(console), "Erro de conexão com o banco");
db.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);

module.exports = app;
