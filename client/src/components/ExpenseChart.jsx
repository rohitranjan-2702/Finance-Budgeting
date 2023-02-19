import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    responsive: true,
    labels: ['#food', '#entertainment', '#travel', '#academics', '#others'],
    datasets: [
      {
        label: '# of Votes',
        data: [15,25,10,10,40],
        options: {
            layout: {
                padding: 0
            }
        },
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 0, 247)',
            'rgb(255, 205, 86)',
            'rgb(56, 169, 255)',
            'rgb(56, 255, 59)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const ExpenseChart = () => {
  return (<>

<div class="m-4 flex max-w-full flex-col items-center justify-center rounded-md bg-slate-200 p-5">
  <div class="mb-4 text-3xl">Income: <span class="font-bold text-purple-700">$10,000</span></div>
  <div class="mb-4 text-3xl">Expenses: <span class="font-bold text-purple-700">$7000</span></div>
  <div class="mb-4 text-3xl">Savings: <span class="font-bold text-purple-700">$3000</span></div>
  <div class="mb-4 text-3xl font-medium">Pie Chart</div>
  <div class="flex h-[260px] w-[260px] items-center justify-center">
  <Doughnut data={data} />;
  </div>
</div>
    </>
  )
}

export default ExpenseChart