import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import Unispherelogo from './Unispherelogo.png';

function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: false });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");
    setIsDesktop(mediaQuery.matches);
    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.05,
        ease: "easeOut",
      },
    }),
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const letters = ["U", "N", "I", "I", "S", "P", "H", "E", "R", "E"];
  const letterClasses = [
    "F-letter-u",
    "F-letter-n",
    "F-letter-i1",
    "F-letter-i1",
    "F-letter-s",
    "F-letter-p",
    "F-letter-h",
    "F-letter-e",
    "F-letter-r",
    "F-letter-e2",
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        ref={contentRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      >
        {/* Left Section */}
        <motion.div className="footer-left">
          <motion.img
            src={Unispherelogo} // Replace with actual Unispherelogo.png
            alt="Unisphere Logo"
            className="footer-logo"
            variants={logoVariants}
          />
          <h1 className="footer-title">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className={letterClasses[i]}
                custom={i}
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p className="footer-tagline" variants={taglineVariants}>
            Fostering Connections, <br />
            Fueling Success
          </motion.p>
          <div className="social-links">
            <motion.a
              href="https://www.instagram.com/uniisphere.in"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Follow us on Instagram"
              variants={linkVariants}
              custom={0}
            >
              <FaInstagram />
              Instagram
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/uniisphereapp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="Connect with us on LinkedIn"
              variants={linkVariants}
              custom={1}
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="footer-right">
          <ul className="footer-links">
            {[
              { href: "/about", text: "About" },
              { href: "/privacy-policy", text: "Privacy Policy" },
              { href: "/cookie-policy", text: "Cookie Policy" },
              { href: "/user-agreement", text: "User Agreement" },
              { href: "/community-guidelines", text: "Community Guidelines" },
            ].map((link, i) => (
              <motion.li key={link.href} variants={linkVariants} custom={i}>
                <a href={link.href}>{link.text}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;