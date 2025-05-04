import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import './Collaborates.css';
import Unispherelogo from './Unispherelogo.png'; // Unisphere logo
import Du from './Du.svg'; // DUSU logo

function Collaborates() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(true); // Default to true for safety
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.2 }); // Trigger every time 20% visible

  // Handle media query with error boundary
  useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(min-width: 769px)");
      setIsDesktopOrTablet(mediaQuery.matches);
      const handleResize = () => setIsDesktopOrTablet(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);
      return () => mediaQuery.removeEventListener("change", handleResize);
    } catch (error) {
      console.error("Media query error:", error);
      setIsDesktopOrTablet(true); // Fallback to enable animations
    }
  }, []);

  // Debug animation conditions
  useEffect(() => {
    console.log("Collaborates animation conditions:", {
      isInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for DUSU item (from left)
  const leftItemVariants = {
    hidden: { x: "-10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for Unisphere item (from right)
  const rightItemVariants = {
    hidden: { x: "10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="collaborates-section">
      <h2 className="collaborates-title">Official Collaborates</h2>
      <div className="collaborates-content" ref={contentRef}>
        {/* DUSU Logo and Label */}
        <motion.div
          className="collaborate-item"
          variants={isDesktopOrTablet && !shouldReduceMotion ? leftItemVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src={Du} alt="DUSU Logo" className="collaborate-logo" />
          <p className="collaborate-label">DUSU (Delhi University <br /> Students Union)</p>
        </motion.div>
        {/* Vertical Divider */}
        <div className="divider"></div>
        {/* Unisphere Logo and Label */}
        <motion.div
          className="collaborate-item"
          variants={isDesktopOrTablet && !shouldReduceMotion ? rightItemVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img src={Unispherelogo} alt="Unisphere Logo" className="collaborate-logo" />
          <p className="collaborate-label">Unisphere</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Collaborates;