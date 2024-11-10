const mongoose = require("mongoose");

//Task model
const taskSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  task: {
    type: String,
    unique: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
