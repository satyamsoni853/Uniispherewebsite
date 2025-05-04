import React from "react";
import Unispherelogo from "./Unispherelogo.png"; // Import the logo
import "./Footer.css"; // Import the CSS file for styling
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Logo, Stylized Title, and Tagline */}
        <div className="footer-left">
          <h1 className="footer-title">
            <img
              src={Unispherelogo}
              alt="Unisphere Logo"
              className="footer-logo"
            />
            <span className="F-letter-u">U</span>
            <span className="F-letter-n">N</span>
            <span className="F-letter-i1">I</span>
            <span className="F-letter-i1">I</span>
            <span className="F-letter-s">S</span>
            <span className="F-letter-p">P</span>
            <span className="F-letter-h">H</span>
            <span className="F-letter-e">E</span>
            <span className="F-letter-r">R</span>
            <span className="F-letter-e2">E</span>
          </h1>
          <p className="footer-tagline">
            Fostering Connections, <br />
            Fueling Success
          </p>
          {/* Social Media Icons */}
          <div className="social-links">
            <span className="social-icon instagram">
              <FaInstagram />
              Instagram
            </span>

            <span className="social-icon linkedin">
              <FaLinkedin />
              LinkedIn
            </span>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Policy</a>
            </li>
            <li>
              <a href="/user-agreement">User Agreement</a>
            </li>
            <li>
              <a href="/community-guidelines">Community Guidelines</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
