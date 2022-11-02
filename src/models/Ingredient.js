const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema(
  {
    cod: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Ingredient = mongoose.model("ingredient", IngredientSchema);

module.exports = Ingredient;
