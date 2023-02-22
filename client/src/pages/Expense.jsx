import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ExpenseChart from "../components/ExpenseChart";
import ExpenseCard from "../components/ExpenseCard";
import NewCard from "../components/NewCard";
import { getMonthlyExpense } from "../utils/dbHelpers";

const Expense = () => {
  const [allTransactionData, setAllTransactionData] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const navigate = useNavigate();
  const fetchData = () => {
    getMonthlyExpense(date.year, date.month).then(([error, expenses]) => {
      if (error) {
        navigate("/login");
      }
      let expenseSum = 0;
      let incomeSum = 0;
      expenses.forEach((item) => {
        if (item.type === "income") {
          incomeSum += item.amount;
        } else if (item.type === "expense") {
          expenseSum += item.amount;
        }
      });
      setTotalExpense(expenseSum);
      setTotalIncome(incomeSum);
      setAllTransactionData(expenses);
    });
  };
  useEffect(() => {
    fetchData();
  }, [date]);

  const labelValue = {};
  const expenseData = allTransactionData.filter((item) => {
    return item.type === "expense";
  });
  expenseData.forEach((item) => {
    if (labelValue[item.tags[0]] === undefined) {
      labelValue[item.tags[0]] = item.amount;
    } else {
      labelValue[item.tags[0]] += item.amount;
    }
  });
  const labels = Object.keys(labelValue).length
    ? Object.keys(labelValue)
    : ["No-Expenses"];
  const values = Object.values(labelValue).length
    ? Object.values(labelValue)
    : [100];

  return (
    <>
      <div className=" p-5 bg-slate-200 w-full mr-6">
        <div className="flex items-center justify-center m-4">
          <label htmlFor="month">Choose month: </label>
          <input
            className="m-2 p-2"
            type="month"
            name="month"
            value={`${date.year}-${String(date.month + 1).padStart(2, "0")}`}
            onChange={(e) => {
              setDate({
                month: parseInt(e.target.value.slice(5, 7)) - 1,
                year: parseInt(e.target.value.slice(0, 4)),
              });
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-row">
          <div className="flex justify-between gap-4 rounded-lg border border-gray-200 bg-white p-3 w-[400px] shadow dark:border-gray-700 dark:bg-gray-800 mb-2">
            <h5 className="mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white ml-2">
              Amount
            </h5>
            <h5 className="mb-2 text-[18px] font-normal tracking-tight text-gray-900 dark:text-white ml-2">
              DD-MM-YYYY
            </h5>
            <div className="flex h-8 w-16 items-center justify-center rounded-full bg-black text-sm font-thin text-white">
              #tag
            </div>
          </div>
        </div>

        {allTransactionData.map((data) => (
          <NewCard
            key={data._id}
            id={data._id}
            amount={data.amount}
            type={data.type}
            date={data.date}
            tags={data.tags[0]}
            triggerFetch={fetchData}
          />
        ))}

        <div className="flex items-center justify-center flex-row">
          <ExpenseCard triggerFetch={fetchData} />
        </div>
      </div>

      <ExpenseChart
        labels={labels}
        values={values}
        totalExpense={totalExpense}
      />
    </>
  );
};

export default Expense;