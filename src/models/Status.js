const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema(
  {
    cod: { type: String },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const status = mongoose.model("status", StatusSchema);

module.exports = status;
