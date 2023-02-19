import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Expenses',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Expense',
        data: [300, 400, 600, 800, 500, 200, 1000, 1200, 700, 300, 1100, 750],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };

const MonthlyExpense = () => {
  return (
  <>
  <div className="m-4 flex max-w-full flex-col items-center justify-center rounded-md bg-slate-200 p-5">
    <div className="flex h-[500px] w-[500px] items-center justify-center">
        <Line options={options} data={data} />;
    </div>
  </div>
  </>
  )
}

export default MonthlyExpense