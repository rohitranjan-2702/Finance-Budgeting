const express = require("express");
const { getExpenses, addExpense, test } = require("../controllers/expenseController");

const router = express.Router();

router.get("/monthly", getExpenses).post("/new", addExpense).post("/test", test);

module.exports = router;
