const ingredient = require("../models/Ingredient.js");

class IngredientsController {
  static getIngredients = (req, res) => {
    const type = req.query.type;
    ingredient.find((err, ingredients) => {
      if (type == null) {
        res.status(200).json(ingredients);
      } else {
        const result = ingredients.filter((ingredient) => {
          if (ingredient.type == type)  {
            return true;
          }
        });
        res.status(200).json(result);
      }
    });
  };

  static getIngredientById = (req, res) => {
    const id = req.params.id;

    ingredient.findById(id, (err, Ingredient) => {
      if (!err) {
        res.status(200).send(Ingredient);
      } else {
        res.status(400).send({
          message: `${err.message} - id de ingrediente não encontrado`,
        });
      }
    });
  };

  static createIngredient = (req, res) => {
    let ingredientTemp = new ingredient(req.body);

    ingredientTemp.save((err) => {
      if (!err) {
        res.status(200).send({ message: "Ingrediente criado com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao criar ingrediente` });
      }
    });
  };

  static updateIngredient = (req, res) => {
    const id = req.params.id;

    ingredient.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res
          .status(200)
          .send({ message: "Ingrediente atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteIngredient = (req, res) => {
    const id = req.params.id;

    ingredient.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Ingrediente removido com sucesso!" });
      } else {
        res
          .status(500)
          .send({ message: "erro interno ao deletar ingrediente" });
      }
    });
  };
}

module.exports = IngredientsController;
