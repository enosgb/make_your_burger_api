const express = require("express");

const burgers = require("./burger.routes.js");
const ingredients = require("./ingredients.routes.js");
const status = require("./status.routes.js");

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ message: "ok" });
  });

  app.use(express.json(), burgers, ingredients, status);
};
module.exports = routes;
