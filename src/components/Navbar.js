import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-mark">A</div>
        <div className="logo-text">ASTRONAVEEN</div>
      </div>
      

<div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/kundali">Kundali</Link>   {/* NEW */}
  <Link to="/services">Services</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
    <Link to="/compatibility">Compatibility</Link> {/* NEW */}
  <Link to="/login" className="btn btn-outline">
    Login
  </Link>
  <Link to="/register" className="btn btn-primary">
    Register
  </Link>
</div>




      
    </nav>
  );
}
