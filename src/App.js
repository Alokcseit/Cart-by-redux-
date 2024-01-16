import "./App.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
