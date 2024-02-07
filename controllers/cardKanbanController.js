// controllers/taskController.js
const cardKanbanModel = require("../models/cardKanbanModel");

async function getAllCards(req, res) {
  try {
    const card = await cardKanbanModel.find({});
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefas." });
  }
}

async function createCard(req, res) {
  try {
    const newCard = await cardKanbanModel.create(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar tarefa." });
  }
}

async function updateCard(req, res) {
  try {
    const updatedCard = await cardKanbanModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar tarefa." });
  }
}

async function moveCard(req, res) {
  try {
    const moveCard = await cardKanbanModel.findByIdAndUpdate(
      req.params.id,
      { column: req.body.column },
      { new: true },
    );
    res.status(200).json(moveCard);
  } catch (error) {
    res.status(500).json({ message: "Erro ao mover tarefa." });
  }
}

async function deleteCard(req, res) {
  try {
    await cardKanbanModel.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir tarefa." });
  }
}

module.exports = {
  getAllCards,
  createCard,
  updateCard,
  moveCard,
  deleteCard,
};
