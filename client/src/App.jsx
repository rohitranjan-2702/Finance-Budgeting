import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginContext } from "./Contexts/LoginContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Expense from "./pages/Expense";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <ChakraProvider>
      <BrowserRouter>
        <LoginContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/expenses" element={<Expense />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </LoginContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
