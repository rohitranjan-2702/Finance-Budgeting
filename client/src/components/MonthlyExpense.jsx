import React from "react";
import { Show, Hide } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Expenses",
    },
  },
};


const MonthlyExpense = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Expense",
        data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="m-4 flex max-w-full flex-col items-center justify-center rounded-md bg-slate-200 p-5">
        <Hide breakpoint="(max-width: 400px)">
          <div className="flex h-[650px] w-[650px] items-center justify-center">
            <Line options={options} data={chartData} />
          </div>
        </Hide>

        <Show breakpoint="(max-width: 400px)">
          <div className="flex h-[300px] w-[300px] items-center justify-center">
            <Line options={options} data={chartData} />
          </div>
        </Show>
      </div>
    </>
  );
};

export default MonthlyExpense;
