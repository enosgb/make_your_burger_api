const burgers = require("../models/Burger.js");

class BurgerController {
  static getBurgers = (req, res) => {
    burgers.find((err, burgers) => {
      res.status(200).json(burgers);
    });
  };

  static getBurgersById = (req, res) => {
    const id = req.params.id;

    burgers.findById(id, (err, Burger) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id de burger não encontrado` });
      } else {
        res.status(200).send(Burger);
      }
    });
  };

  static createBurger = (req, res) => {
    let burger = new burgers(req.body);

    burger.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao criar burger` });
      } else {
        res.status(201).send({ message: "Burger criado com sucesso!" });
      }
    });
  };

  static updateBurger = (req, res) => {
    const id = req.params.id;

    burgers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Burger atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBurger = (req, res) => {
    const id = req.params.id;

    burgers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Burger removido com sucesso!" });
      } else {
        res.status(500).send({ message: "erro ao deletar burger" });
      }
    });
  };
}

module.exports = BurgerController;
