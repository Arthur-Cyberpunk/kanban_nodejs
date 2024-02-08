const mongoose = require("mongoose");

const cardKanbanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["To do", "Doing", "Ready"],
    default: "To do",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  concludedAt: {
    type: Date,
    default: null,
  },
});

const cardKanbanModel = mongoose.model("cardKanban", cardKanbanSchema);

module.exports = cardKanbanModel;
