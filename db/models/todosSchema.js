const mongoose = require("mongoose");

// Todos Schema
const todosSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  isDeleted: { type: String, default: false },
  isCompleted: { type: String, default: false },
});

const todosModel = mongoose.model("todo", todosSchema);

module.exports = todosModel;