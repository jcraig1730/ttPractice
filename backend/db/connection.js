const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connection = mongoose.connect(
  "mongodb://localhost:27017/foodApi",
  options
);

module.exports = connection;
