import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import './Collaborates.css';
import Unispherelogo from './Unispherelogo.png'; // Unisphere logo
import Du from './Du.svg'; // DUSU logo
function Collaborates() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="collaborates-section"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Official Collaborates Section"
    >
      <motion.h2 className="collaborates-title" variants={titleVariants}>
        Official Collaborates
      </motion.h2>
      <div className="collaborates-content" ref={contentRef}>
        {/* DUSU Logo and Label */}
        <motion.div
          className="collaborate-item"
          variants={itemVariants}
        >
          <img
            src={Du} // Replace with actual Du.svg
            alt="DUSU Logo"
            className="collaborate-logo"
            aria-label="DUSU (Delhi University Students Union) Logo"
          />
          <p className="collaborate-label">
            DUSU (Delhi University <br /> Students Union)
          </p>
        </motion.div>
        {/* Vertical Divider */}
        <div className="divider"></div>
        {/* Unisphere Logo and Label */}
        <motion.div
          className="collaborate-item"
          variants={itemVariants}
        >
          <img
            src={Unispherelogo} // Replace with actual Unispherelogo.png
            alt="Unisphere Logo"
            className="collaborate-logo"
            aria-label="Unisphere Logo"
          />
          <p className="collaborate-label">Unisphere</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Collaborates;