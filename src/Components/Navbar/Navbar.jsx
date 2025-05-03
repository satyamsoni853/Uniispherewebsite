import React from 'react';
import Unispherelogo from './Unispherelogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: Logo and Navigation links */}
      <div className="left-section">
        <div className="logo-container">
          <img src={Unispherelogo} alt="Unisphere Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link Navbar-Human-Library">Human Library</a>
          <span className="Navbar-divider">|</span>
          <a href="#" className="nav-link Navbar-Guidenest">Guidenest</a>
          <span className="Navbar-divider">|</span>
          <a href="#" className="nav-link Navbar-Blogs">Blogs</a>
        </div>
      </div>

      {/* Right side: Login and Sign Up buttons */}
      <div className="right-section">
        <button className="Navbar-login-button">Log In</button>
        <button className="Navbar-signup-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;