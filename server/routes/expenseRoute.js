const express = require("express");
const { getExpenses, addExpense } = require("../controllers/expenseController");

const router = express.Router();

router.get("/monthly", getExpenses).post("/new", addExpense);

module.exports = router;
