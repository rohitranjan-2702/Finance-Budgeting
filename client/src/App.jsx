import Home from "./pages/home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ExpenseCard from "./components/ExpenseCard";
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/expenses' element={<ExpenseCard/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
    
  );
}

export default App;
