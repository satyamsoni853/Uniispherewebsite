import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./OurGoal.css";

function OurGoal() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(true); // Default to true for safety
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 }); // Trigger every time 20% visible

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
    console.log("OurGoal animation conditions:", {
      isInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for title (from left)
  const titleVariants = {
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

  // Animation variants for description (from right)
  const descriptionVariants = {
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
    <div className="our-goal-section" ref={sectionRef}>
      <motion.h2
        className="our-goal-title"
        variants={isDesktopOrTablet && !shouldReduceMotion ? titleVariants : {}}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Our Goal
      </motion.h2>
      <motion.p
        className="our-goal-description"
        variants={isDesktopOrTablet && !shouldReduceMotion ? descriptionVariants : {}}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Unisphere’s mission is to empower university students by fostering meaningful connections, enhancing academic collaboration, and providing resources for personal and professional growth ensuring opportunities for all, regardless of where they graduated from.
      </motion.p>
    </div>
  );
}

export default OurGoal;