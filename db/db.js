const mongoose = require("mongoose");
const dotenv = require("dotenv");

// load environment variables
dotenv.config();

// DB_URL variable
const DB_URL = process.env.DB_URL;

// Add Options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish The Connection
mongoose.connect(`${DB_URL}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);