const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenses = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});
const expensesSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 4,
  },
  month: {
    type: String,
    required: true,
    min: 3,
    max: 12,
  },
  type: { type: String, required: true }, //income or expense
  expenses: [expenses],
});
module.exports = mongoose.model("expensesamount", expensesSchema);
