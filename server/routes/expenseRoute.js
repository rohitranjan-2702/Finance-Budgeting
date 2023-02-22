const express = require("express");
const {
  getOneMonthExpenses,
  addExpense,
  deleteExpense,
  getSixMonthExpenses,
} = require("../controllers/expenseController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/monthly", protect, getOneMonthExpenses);
router.get("/sixmonth", protect, getSixMonthExpenses);
router.post("/new", protect, addExpense);
router.delete("/delete", protect, deleteExpense);

module.exports = router;
