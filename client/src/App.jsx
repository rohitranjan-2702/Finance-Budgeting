import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginContext } from "./Contexts/LoginContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Expense from "./pages/Expense";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))?.isAuthed || false
  );
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user"))?.name || ""
  );
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
  };
  return (
    <ChakraProvider>
      <BrowserRouter>
        <LoginContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userName, setUserName, logout }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Videos" element={<Videos />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/expenses" element={<Expense />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/invest" element={<Invest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </LoginContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
