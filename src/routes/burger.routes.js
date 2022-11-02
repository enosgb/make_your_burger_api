const express = require("express");
const BurgerController = require("../controllers/burger.controller.js");

const router = express.Router();

router
  .get("/burgers", BurgerController.getBurgers)
  .get("/burgers/:id", BurgerController.getBurgersById)
  .post("/burgers", BurgerController.createBurger)
  .put("/burgers/:id", BurgerController.updateBurger)
  .delete("/burgers/:id", BurgerController.deleteBurger);

module.exports = router;
