const mongoose = require("mongoose");
const expense = require("../models/expensesSchema");

// @desc : get all expenses of particular month of signed-in user
// @route: GET /expense/monthly
// @reqBody: year, month
// @access: private
const getExpenses = async (req, res) => {
  try {
    const { _id } = req.user;
    const { year, month } = req.body;
    const expenses = (
      await expense.findOne({
        user: _id,
        year,
        month,
      })
    ).expenses;
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc : add new expense of particular month of signed-in user
// @route: POST /expense/new
// @reqBody: title, year, month, date, amount, tags
// @access: private
const addExpense = async (req, res) => {
  try {
    const { _id } = req.user;
    const { title, year, month, date, amount, tags } = req.body;
    const expenses = await expense.findOneAndUpdate(
      {
        user: _id,
        year: year,
        month: month,
      },
      { $push: { expenses: { title, date, amount, tags } } },
      { upsert: true, new: true }
    );
    res.status(200).json({
      expenses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc : delete particular expense of particular month of signed-in user
// @route: DELETE /expense/delete
// @reqBody: year, month, expenseId
// @access: private
const deleteExpense = async (req, res) => {
  try {
    const { _id } = req.user;
    const { year, month, expenseId } = req.body;
    const expenses = await expense.findOneAndUpdate(
      {
        user: _id,
        year: year,
        month: month,
      },
      { $pull: { expenses: { _id: mongoose.Types.ObjectId(expenseId) } } },
      { upsert: true, new: true }
    );
    res.status(200).json({
      expenses,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExpenses,
  addExpense,
  deleteExpense,
};
