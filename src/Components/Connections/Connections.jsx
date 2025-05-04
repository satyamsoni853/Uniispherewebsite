import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Connections.css";
import Image from "./image.svg";

function Connections() {
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
    console.log("Animation conditions:", {
      isInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for image (from left)
  const imageVariants = {
    hidden: { x: "-20vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="main-connections-container">
      <div className="main-connections-header">Our Features</div>
      <div className="main-connections-title">Connections</div>
      <div className="main-connections-content" ref={contentRef}>
        <div className="main-connections-image-container">
          <motion.img
            className="main-connections-image"
            src={Image}
            alt="Connections feature"
            variants={isDesktopOrTablet && !shouldReduceMotion ? imageVariants : {}}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
        <motion.div
          className="main-connections-text"
          variants={isDesktopOrTablet && !shouldReduceMotion ? textVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          A feature that helps you discover students who truly get you — whether it's shared habits, music taste, study patterns, or late-night ramen cravings. Powered by vibe-based profiling and smart preferences, this tool connects you with like-minded individuals to build easy, natural friendships that feel effortless from day one.
        </motion.div>
      </div>
      <div className="main-connections-footer">
        Because Real Connections Start With Familiar Vibes
      </div>
    </div>
  );
}

export default Connections;