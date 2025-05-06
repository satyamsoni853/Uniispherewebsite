import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Unispherelogo from './Unispherelogo.png';
import './Navbar.css';

function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const navbarRef = useRef(null);
  const isInView = useInView(navbarRef, { amount: 0.3, once: false });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const authLink = "http://uniisphere-frontend.s3-website-us-east-1.amazonaws.com/";

  return (
    <motion.nav
      className="navbar"
      ref={navbarRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Main Navigation"
    >
      {/* Left side: Logo and Navigation links */}
      <div className="left-section">
        <motion.div className="logo-container" variants={logoVariants}>
          <img src={Unispherelogo} alt="Unisphere Logo" className="logo" />
        </motion.div>
        <div className="nav-links">
          {[
            { href: "#", class: "nav-link Navbar-Human-Library", text: "Human Library" },
            { href: "#", class: "nav-link Navbar-Guidenest", text: "Edu-Vault" },
            { href: "#", class: "nav-link Navbar-Blogs", text: "Blogs" },
          ].map((link, i) => (
            <React.Fragment key={link.text}>
              <motion.a
                href={link.href}
                className={link.class}
                variants={linkVariants}
                custom={i}
                aria-label={link.text}
              >
                {link.text}
              </motion.a>
              {i < 2 && <span className="Navbar-divider">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right side: Login and Sign Up buttons */}
      <motion.div
        className="right-section"
        variants={containerVariants}
        animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.a
          href={authLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          aria-label="Log In"
        >
          <button className="Navbar-login-button">Log In</button>
        </motion.a>
        <motion.a
          href={authLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          aria-label="Sign Up"
        >
          <button className="Navbar-signup-button">Sign Up</button>
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;