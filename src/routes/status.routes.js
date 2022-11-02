const express = require("express");
const StatusController = require("../controllers/status.controller.js");
const { route } = require("./burger.routes");

const router = express.Router();

router
  .get("/status", StatusController.getStatus)
  .post("/status", StatusController.createStatus)
  .delete("/status/:id", StatusController.deleteStatus);

module.exports = router;
