import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setUserName } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  return (
    <header>
      <nav className="shadow-lg">
        <div className="flex flex-wrap items-center justify-between px-6 py-4">
          <div
            className="flex items-center"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img
              src="https://i.ibb.co/cchk5Mp/logo.png"
              alt="logo"
              className="mr-3 h-9"
            />
            <span className="hidden text-lg font-semibold text-gray-800 sm:block">
              {" "}
              FinanceAPP{" "}
            </span>
          </div>
          <div className="flex">
            <div className="px border-grey-300 hidden items-center sm:flex ">
              {/* <p className="text-md mr-3 hidden font-semibold text-gray-800 sm:block">Annette Black</p>
            <img src="https://i.ibb.co/2FbV2vm/Ellipse.png" alt="profile picture" className="mr-3 h-10 w-10 rounded-full" /> */}
            </div>
            {isLoggedIn ? (
              <div>
                <button
                  className="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="text-md px-6 py-3 font-semibold text-blue-600 transition-all hover:text-blue-700 disabled:bg-gray-400"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="text-md rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-400"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
