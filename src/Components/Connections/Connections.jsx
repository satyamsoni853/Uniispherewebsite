import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Connections.css";
import Image from "./image.svg";

function Connections() {
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

  const headerVariants = {
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

  const imageVariants = {
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

  const textVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="main-connections-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Connections Section"
    >
      <motion.div className="main-connections-header" variants={headerVariants}>
        Our Features
      </motion.div>
      <motion.div className="main-connections-title" variants={titleVariants}>
        Connections
      </motion.div>
      <div className="main-connections-content" ref={contentRef}>
        <div className="main-connections-image-container">
          <motion.img
            className="main-connections-image"
            src={Image} // Replace with actual image.svg
            alt="Connections feature illustration"
            variants={imageVariants}
            aria-label="Connections feature illustration"
          />
        </div>
        <motion.div className="main-connections-text" variants={textVariants}>
          A feature that helps you discover students who truly get you — whether it's shared habits, music taste, study patterns, or late-night ramen cravings. Powered by vibe-based profiling and smart preferences, this tool connects you with like-minded individuals to build easy, natural friendships that feel effortless from day one.
        </motion.div>
      </div>
      <motion.div className="main-connections-footer" variants={footerVariants}>
        Because Real Connections Start With Familiar Vibes
      </motion.div>
    </motion.div>
  );
}

export default Connections;