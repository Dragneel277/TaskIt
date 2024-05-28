const mongoose = require("mongoose");


const connectDB = () => {
  const url = 'mongodb://127.0.0.1:27017/task'
  return mongoose.connect(url)
};

module.exports = connectDB;
