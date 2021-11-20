const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./db/db.js");

// instantiate the app
const app = express();

// load environment variables
dotenv.config();

// app level middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routers
const todosRouter = require("./routers/routes/todos");
app.use("/todos", todosRouter);

// PORT variable
const PORT = process.env.PORT;

// listen to app
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
