const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    completed: { type: Boolean, default: false },
    description: { type: String, required: [true, "description cannot be empty"] },
});

module.exports = mongoose.model("Task", TaskSchema);
