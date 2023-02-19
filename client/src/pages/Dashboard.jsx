import React, { useContext } from "react";
import MonthlyExpense from "../components/MonthlyExpense";
import { LoginContext } from "../Contexts/LoginContext";

const Dashboard = () => {
  const { userName } = useContext(LoginContext);
  return (
    <>
      <div class="bg-slate-200">
        <div class="m-0 flex max-w-full flex-col items-center rounded-md bg-slate-200">
          <div class="mb-2 mt-4 text-3xl font-bold">Dashboard</div>
          <div class="mb-4 text-2xl font-semibold">
            Hello 🖐, Welcome<span class="text-blue-500"> {userName} !</span>
          </div>
        </div>
        <div class="flex md:flex-row flex-col">
          <div class=" flex h-[250px] md:w-1/2 w-screen ">
            <MonthlyExpense />
          </div>
          <div class="m-4 flex md:w-1/2 w-full flex-col items-center justify-center p-4">
            <div class="mb-4 text-3xl">
              Income:{" "}
              <span class="text-4xl font-bold text-blue-600">$10,000</span>
            </div>
            <div class=" text-3xl">
              Expenses:{" "}
              <span class="text-4xl font-bold text-red-600">$7000</span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center md:m-4">
          <div class="mb-4 text-3xl">
            Your Savings:{" "}
            <span class="text-4xl font-bold text-green-600">$3000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
