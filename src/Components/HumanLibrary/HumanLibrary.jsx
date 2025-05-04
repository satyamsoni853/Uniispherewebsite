import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./HumanLibrary.css";
import Image from "./image.svg";

function HumanLibrary() {
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
    console.log("HumanLibrary animation conditions:", {
      isInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for image (from left)
  const imageVariants = {
    hidden: { x: "-10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for text (from right)
  const textVariants = {
    hidden: { x: "10vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="human-library-container">
      <div className="human-library-title">HUMAN LIBRARY</div>
      <div className="human-library-content" ref={contentRef}>
        <div className="human-library-image-container">
          <motion.img
            className="human-library-image"
            src={Image}
            alt="Human Library feature"
            variants={isDesktopOrTablet && !shouldReduceMotion ? imageVariants : {}}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
        <motion.div
          className="human-library-text"
          variants={isDesktopOrTablet && !shouldReduceMotion ? textVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          A feature that allows individuals to share their stories, discuss their challenges, and seek guidance from others. Using a matching algorithm, you will be paired with people who can offer support, insights, or advice, creating meaningful connections with those they may not know
        </motion.div>
      </div>
      <div className="human-library-footer">
        A Community That Cares About What You Feels and Who You Are
      </div>
    </div>
  );
}

export default HumanLibrary;