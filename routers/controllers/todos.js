const todosModel = require("./../../db/models/todosSchema");

const getTodos = (req, res) => {
  todosModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addTodo = (req, res) => {
  const { todo } = req.body;
  const newTodoData = new todosModel({
    todo,
  });
  newTodoData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateTodo = (req, res) => {
  const { todo } = req.body;
  const { id } = req.params;
  todosModel
    .findOneAndUpdate({ _id: id }, { todo: todo })
    .then(() => {
      res.json("Todo updated");
    })
    .catch((err) => {
      res.send(err);
    });
};

const setCompleted = (req, res) => {
  const { id } = req.params;
  todosModel
    .findOneAndUpdate({ _id: id }, { isCompleted: true })
    .then(() => {
      res.json("Todo set to complelete");
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  todosModel
    .remove({ _id: id })
    .then(() => {
      res.json("Todo deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getTodos, addTodo, updateTodo, setCompleted, deleteTodo };
