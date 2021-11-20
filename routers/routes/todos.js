const express = require("express");

const { getTodos, addTodo, updateTodo, setCompleted, deleteTodo } = require("./../controllers/todos.js");

const todosRouter = express.Router();

todosRouter.get("/getAll", getTodos);
todosRouter.post("/add", addTodo);
todosRouter.put("/update/:id", updateTodo);
todosRouter.put("/setComplete/:id", setCompleted);
todosRouter.delete("/delete/:id", deleteTodo);

module.exports = todosRouter;
