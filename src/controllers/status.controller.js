const status = require("../models/Status.js");

class StatusController {
  static getStatus = (req, res) => {
    status.find((err, status) => {
      res.status(200).json(status);
    });
  };

  static createStatus = (req, res) => {
    const newStatus = new status(req.body);

    newStatus.save((err) => {
      if (!err) {
        res.status(201).send({ message: "Status criado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - erro ao criar status` });
      }
    });
  };

  static deleteStatus = (req, res) => {
    const id = req.params.id;

    status.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Status deletado com sucesso!" });
      } else {
        res.status(500).send({ message: `erro ao deletar status` });
      }
    });
  };
}

module.exports = StatusController;
