import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import CustomCarousel from "./components/carusel/Carusel";
import ProductDetail from "./productsdetail/ProductDetail";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <header>
        <Navbar setSearch={setSearch} /> 
        <Routes>
          <Route path="/" element={<CustomCarousel search={search} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </header>
    </Router>
  );
}

export default App;
