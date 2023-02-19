import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <Login />
        <Signup />
        <Footer />
      </div>
    </>
  );
}

export default App;
