import React, { useContext } from "react";
import ExpenseChart from "../components/ExpenseChart";
import MonthlyExpense from "../components/MonthlyExpense";
import { LoginContext } from "../Contexts/LoginContext";

const Dashboard = () => {
  const { userName } = useContext(LoginContext);

  return (
    <>
      <h1>Hi, {userName}</h1>
      <ExpenseChart />
      <MonthlyExpense />
    </>
  );
};

export default Dashboard;
