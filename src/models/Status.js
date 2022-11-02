const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    cod: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const status = mongoose.model("status", StatusSchema);

module.exports = status;
