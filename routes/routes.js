const express = require("express");
const router = express.Router();
const cardKanbanController = require("../controllers/cardKanbanController");

router.get("/card", cardKanbanController.getAllCards);
router.post("/card", cardKanbanController.createCard);
router.patch("/card/:id", cardKanbanController.updateCard);
router.patch("/card/:id", cardKanbanController.moveCard);
router.delete("/card/:id", cardKanbanController.deleteCard);

module.exports = router;
