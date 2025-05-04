import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Blog.css";
import Image from "./image.svg";

function Blog() {
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
    console.log("Blog animation conditions:", {
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for text (from right)
  const textVariants = {
    hidden: { x: "20vw", opacity: 0 },
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
    <div className="uni-blog-container">
      <div className="uni-blog-title">Blogs</div>
      <div className="uni-blog-content" ref={contentRef}>
        <div className="uni-blog-image-container">
          <motion.img
            className="uni-blog-image"
            src={Image}
            alt="Blog feature"
            variants={isDesktopOrTablet && !shouldReduceMotion ? imageVariants : {}}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
        <motion.div
          className="uni-blog-text"
          variants={isDesktopOrTablet && !shouldReduceMotion ? textVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Discover a space built just for students—where helpful tips, inspiring stories, and practical advice come together to support your academic journey and personal growth. Whether you're looking for study hacks, productivity tools, or career guidance, our blog is designed to keep you informed, motivated, and ready to take on every challenge that comes your way.
        </motion.div>
      </div>
      <div className="uni-blog-footer">
        Building a Better Tomorrow by Supporting Communities Today
      </div>
    </div>
  );
}

export default Blog;