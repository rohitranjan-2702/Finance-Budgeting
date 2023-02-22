const mongoose = require("mongoose");
const expense = require("../models/expensesSchema");

// @desc : get one month expenses of signed-in user
// @route: POST /expense/monthly
// @reqBody: year, month
// @access: private
const getOneMonthExpenses = async (req, res) => {
  try {
    const { _id } = req.user;
    const { year, month } = req.body;
    const expensesExists = await expense.findOne({
      user: _id,
      year,
      month,
    });
    const expenses = expensesExists ? expensesExists.expenses : [];
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

// @desc : get six month expenses of signed-in user
// @route: GET /expense/sixmonth
// @reqBody:
// @access: private
const getSixMonthExpenses = async (req, res) => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currYear = date.getFullYear();
  let totalMonths = 6;
  let queryClause = {};
  queryClause[currYear] = [];
  for (i = date.getMonth(); i >= 0 && totalMonths > 0; i--) {
    queryClause[currYear].push(months[i]);
    totalMonths--;
  }
  if (totalMonths > 0) {
    queryClause[currYear - 1] = [];
    for (i = 11; i >= 0 && totalMonths > 0; i--) {
      queryClause[currYear - 1].push(months[i]);
      totalMonths--;
    }
  }
  // res.send(queryClause);
  try {
    let result = [];
    const { _id } = req.user;
    for (year in queryClause) {
      const expensesExists = await expense.find({
        user: _id,
        year: year,
        month: { $in: queryClause[year] },
      });
      result = [...result, ...expensesExists];
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

// @desc : add new expense of particular month of signed-in user
// @route: POST /expense/new
// @reqBody: title, year, month, date, amount, tags
// @access: private
const addExpense = async (req, res) => {
  try {
    const { _id } = req.user;
    const { title, year, month, date, amount, tags, type } = req.body;
    const expenses = await expense.findOneAndUpdate(
      {
        user: _id,
        year: year,
        month: month,
      },
      { $push: { expenses: { title, date, amount, type, tags } } },
      { upsert: true, new: true }
    );
    res.status(200).json({
      expenses,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
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
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

module.exports = {
  getOneMonthExpenses,
  getSixMonthExpenses,
  addExpense,
  deleteExpense,
};
