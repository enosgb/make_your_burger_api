const express = require("express");
const IngredientsController = require("../controllers/ingredients.controller.js");

const router = express.Router();

router
  .get("/ingredients", IngredientsController.getIngredients)
  .get("/ingredients/:id", IngredientsController.getIngredientById)
  .post("/ingredients", IngredientsController.createIngredient)
  .put("/ingredients/:id", IngredientsController.updateIngredient)
  .delete("/ingredients/:id", IngredientsController.deleteIngredient);

module.exports = router;
