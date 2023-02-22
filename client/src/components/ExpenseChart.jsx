import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ labels, values, totalExpense }) => {
  const data = {
    responsive: true,
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        options: {
          layout: {
            padding: 0,
          },
        },
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 0, 247)",
          "rgb(255, 205, 86)",
          "rgb(56, 169, 255)",
          "rgb(56, 255, 59)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="m-0 flex max-w-full flex-col items-center justify-center rounded-md bg-slate-200 p-5">
        {/* <div className="mb-4 text-3xl">Income: <span className="font-bold text-purple-700">$10,000</span></div>
  <div className="mb-4 text-3xl">Expenses: <span className="font-bold text-purple-700">$7000</span></div> */}
        <div className="mb-4 text-3xl">
          Total Expenses:{" "}
          <span className="font-bold text-purple-700">{totalExpense}</span>
        </div>
        <div className="mb-4 text-3xl font-medium">Pie Chart</div>
        <div className="flex h-[260px] w-[260px] items-center justify-center">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
};

export default ExpenseChart;
