import React from "react";
import hero from "../assets/heroImg.png";
const Home = () => {
  return (
    <>
<<<<<<< HEAD


    <nav class="shadow-lg">
        <div class="flex flex-wrap items-center justify-between px-6 py-4">
            <div class="flex items-center">
                <img src="https://i.ibb.co/cchk5Mp/logo.png" alt="logo" class="mr-3 h-9" />
                <span class="hidden text-lg font-semibold text-gray-800 sm:block"> FinanceAPP </span>
            </div>
            <div class="flex">
            <div class="px border-grey-300 hidden items-center sm:flex ">
                {/* <p class="text-md mr-3 hidden font-semibold text-gray-800 sm:block">Annette Black</p>
                <img src="https://i.ibb.co/2FbV2vm/Ellipse.png" alt="profile picture" class="mr-3 h-10 w-10 rounded-full" /> */}
            </div>
            <div>
              <button class="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400">Login</button>
              <button class="text-md rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-400">Sign Up</button>
            </div>
        </div>
        </div>
</nav>


<section class="py-20">
=======
      <section class="py-20">
>>>>>>> 327772be9805098b3bf6aa78a183b4b07dcdb7fb
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 grid place-items-center">
              <img src={hero} alt="img" className="drop-shadow-xl " />
            </div>
            <div class="lg:w-1/2 ">
<<<<<<< HEAD
              <h1 class="flex items-center justify-center sm:block font-poppins lg:text-4xl text-2xl mb-1 text-black title p-5 lg:p-0">Awesome Budgeting App</h1>
              <p class="w-full font-poppins font-[400] text-black mb-4 lg:p-0 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div class="sm:block flex items-center justify-center">
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-2 mb-2 "> Get Started </button>
              </div>
              
=======
              <h1 class="font-poppins text-4xl mb-1 text-black title">
                Awesome Budgeting App
              </h1>
              <p class="w-[550px] font-poppins font-[400] text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                {" "}
                Get Started{" "}
              </button>
>>>>>>> 327772be9805098b3bf6aa78a183b4b07dcdb7fb
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
