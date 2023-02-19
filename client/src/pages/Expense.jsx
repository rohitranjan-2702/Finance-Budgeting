import React, { useState } from 'react';
import ExpenseChart from "../components/ExpenseChart";
import ExpenseCard from "../components/ExpenseCard";
import NewCard from "../components/NewCard";


const demoData = [
  {
    id: 1,
    date:"Sun Feb 20 2023 13:37:36 GMT+0530 (India Standard Time)",
    tags:
      "food"
  ,
    type:"income",
    amount: 5000
  },
  {
    id: 2,
    date:"Sun Feb 20 2023 13:37:36 GMT+0530 (India Standard Time)",
    tags:
      "food"
  ,
    type:"income",
    amount: 3000
  },
  {
    id: 3,
    date:"Sun Feb 20 2023 13:37:36 GMT+0530 (India Standard Time)",
    tags:
      "food"
  ,
    type:"income",
    amount: 8000
  },
  {
    id: 4,
    date:"Sun Feb 20 2023 13:37:36 GMT+0530 (India Standard Time)",
    tags:"food",
    type:"income",
    amount: 9000
  },
  
];

function createEntry(dataset) {
  return (
    <NewCard
      key={dataset.id}
      amount={dataset.amount}
      date={dataset.date}
      tags={dataset.tags[0]}
    />
  );
}

const Expense = () => {
  const handleDelete = () => {};
  const [value, setValue] = useState("");
  
  return (
    <>
      <div className=" p-5 bg-slate-200 w-full mr-6">
      <div className="flex items-center justify-center m-4">
            <label for="month">Choose month: </label>
            <input className="m-2 p-2" type="month" name="month"
            min="2023-01" onChange={() => setValue()}/>
            <div className='flex items-center justify-center m-4 text-4xl'>{value}</div>
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
            <div
              className="w-8 h-8 rounded-xl bg-red-500 items-center justify-center hidden"
              onClick={() => handleDelete()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash text-white"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </div>
        </div>
       
        {demoData.map(createEntry)}
        
        <div className="flex items-center justify-center flex-row">
          <ExpenseCard/>
        </div>
      </div>

      <ExpenseChart />
    </>
  );
};

export default Expense;
