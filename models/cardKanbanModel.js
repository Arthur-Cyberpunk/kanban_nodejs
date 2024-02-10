const mongoose = require("mongoose");

const cardKanbanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  difficult: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Todo", "Doing", "Ready"],
    default: "Todo",
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
