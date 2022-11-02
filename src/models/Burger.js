const mongoose = require("mongoose");

const BurgerSchema = new mongoose.Schema(
  {
    number: { type: String, required: true },
    name: { type: String, required: true },
    meat: { type: String, required: true },
    bread: { type: String, required: true },
    optional: { type: [], required: true },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const burgers = mongoose.model("burgers", BurgerSchema);

module.exports = burgers;
