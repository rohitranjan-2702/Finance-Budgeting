import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav class="shadow-lg">
        <div class="flex flex-wrap items-center justify-between px-6 py-4">
          <div class="flex items-center">
            <img
              src="https://i.ibb.co/cchk5Mp/logo.png"
              alt="logo"
              class="mr-3 h-9"
            />
            <span class="hidden text-lg font-semibold text-gray-800 sm:block">
              {" "}
              FinanceAPP{" "}
            </span>
          </div>
          <div class="flex">
            <div class="px border-grey-300 hidden items-center sm:flex ">
              {/* <p class="text-md mr-3 hidden font-semibold text-gray-800 sm:block">Annette Black</p>
            <img src="https://i.ibb.co/2FbV2vm/Ellipse.png" alt="profile picture" class="mr-3 h-10 w-10 rounded-full" /> */}
            </div>
            <div>
              <button
                class="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                class="text-md rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-400"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
