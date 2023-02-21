import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MonthlyExpense from "../components/MonthlyExpense";
import { LoginContext } from "../Contexts/LoginContext";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { userName } = useContext(LoginContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-200">
        <div className="m-0 flex max-w-full flex-col items-center rounded-md bg-slate-200">
          <div className="mb-4 mt-4 sm:text-5xl text-4xl font-bold">
            Dashboard
          </div>
          <div className="mb-8 sm:text-3xl text-xl font-semibold ">
            Hello 🖐, Welcome
            <span className="text-blue-500 text-2xl"> {userName} !</span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className=" flex h-[250px] md:w-1/2 w-screen ">
            <MonthlyExpense />
          </div>
          <div className="m-4 flex md:w-1/2 w-full flex-col items-center justify-center p-4">
          <div className="mb-4 text-3xl font-bold">
              Feb 2023{" "}
              
            </div>
            <div className="mb-4 text-3xl">
              Income:{" "}
              <span className="text-4xl font-bold text-blue-600">$10,000</span>
            </div>
            <div className=" text-3xl">
              Expenses:{" "}
              <span className="text-4xl font-bold text-red-600">$7000</span>
            </div>
            <Button className="mt-4" colorScheme="green" onClick={()=>{navigate('/expenses')}}>
              Track Expenses
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:m-4 mt-4">
          <div className="mb-4 text-3xl mt-12">
            Your Savings:{" "}
            <span className="text-4xl font-bold text-green-600">$3000</span>
          </div>
        </div>
        <div className="flex items-center justify-center md:m-4">
          <div className="w-full p-4 mb-8 mt-16 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              Grow Your Savings!
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              Stay up to date and grow you money to beat inflation. Visit our
              investment guide and know more about personal finance.{" "}
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Invest Smartly
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
