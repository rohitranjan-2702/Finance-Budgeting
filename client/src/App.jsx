import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ExpenseCard from "./components/ExpenseCard";
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
    <ChakraProvider>
      
      <div className="App">
        <Home />
        <Dashboard/>
        <ExpenseCard/>
        <Login />
        <Signup />
        <Footer />
      </div>
    </ChakraProvider>
    </>
  );
}

export default App;
