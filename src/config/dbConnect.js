const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@cluster0.0dzeewj.mongodb.net/burgerDB"
);

let db = mongoose.connection;

module.exports = db;
