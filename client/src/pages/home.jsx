import React from "react";
import hero from "../assets/heroImg.png";
const Home = () => {
  return (
    <>
      <section class="py-20">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 grid place-items-center">
              <img src={hero} alt="img" className='drop-shadow-xl ' />
              
            </div>
            <div class="lg:w-1/2 ">
<<<<<<< HEAD
              <h1 class="flex items-center justify-center sm:block font-poppins lg:text-4xl text-2xl mb-1 text-black title p-5 lg:p-0">Awesome Budgeting App</h1>
=======
              <h1 class="flex items-center justify-center sm:block font-poppins lg:text-4xl text-2xl mb-1 text-black title p-4 lg:p-0 lg:relative lg:top-[-15px]">Awesome Budgeting App</h1>
>>>>>>> ba9aba8f0f2a19f5c94bd96f5d0b9cab1ff4e2cd
              <p class="w-full font-poppins font-[400] text-black mb-4 lg:p-0 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div class="sm:block flex items-center justify-center">
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:mr-2 mb-2 sm:ml-5  md:mt-[-40px] lg:ml-0 lg:relative lg:top-[15px]"> Get Started </button>
              </div>
              
            </div>
          </div>
        </div>
     </section>
    </>
  );
};

export default Home;