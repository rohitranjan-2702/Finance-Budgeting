import React from "react";
import { deleteExpense } from "../utils/dbHelpers";

function NewCard({ id, amount, type = "", date, tags, triggerFetch }) {
  const month = parseInt(date.slice(5, 7)) - 1;
  const year = date.slice(0, 4);
  const handleDelete = () => {
    deleteExpense(month, year, id).then(() => {
      triggerFetch();
    });
  };
  return (
    <>
      <div className="flex items-center justify-center flex-row">
        <div className="flex justify-between gap-4 rounded-lg border border-gray-200 bg-white p-3 w-[400px] shadow dark:border-gray-700 dark:bg-gray-800 mb-2">
          <h5
            className=" mb-2 text-[18px] font-semibold tracking-tight text-gray-900 dark:text-white ml-2"
            style={type === "income" ? { color: "green" } : { color: "red" }}
          >
            {amount}
          </h5>
          <h5 className="mb-2 text-[18px] font-normal tracking-tight text-gray-900 dark:text-white ml-2">
            {date}
          </h5>
          <div className="flex h-8 w-24 items-center justify-center rounded-full bg-purple-500 text-[12px] font-normal text-white">
            {tags}
          </div>
          <div
            className="w-8 h-8 rounded-xl flex bg-red-500 items-center justify-center"
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
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCard;
