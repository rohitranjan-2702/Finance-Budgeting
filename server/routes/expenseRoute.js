const express = require("express");
const {
  getExpenses,
  addExpense,
  deleteExpense,
} = require("../controllers/expenseController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/monthly", protect, getExpenses);
router.post("/new", protect, addExpense);
router.delete("/delete", protect, deleteExpense);

module.exports = router;
