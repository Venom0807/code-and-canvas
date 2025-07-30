import React from "react";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom"; 
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/cookies" element={<Cookies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
