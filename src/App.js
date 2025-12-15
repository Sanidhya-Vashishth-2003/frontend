// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import KundaliPage from "./components/KundaliPage";  // ⬅️ NEW
import CompatibilityPage from "./components/CompatibilityPage"; // NEW

// inside <Routes>


function App() {
  return (
    <div className="app-shell">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/compatibility" element={<CompatibilityPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/kundali" element={<KundaliPage />} /> {/* NEW */}
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
