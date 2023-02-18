const express = require("express");
const { getExpenses, addExpense } = require("../controllers/expenseController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/monthly", protect, getExpenses);
router.post("/new", protect, addExpense);

module.exports = router;
