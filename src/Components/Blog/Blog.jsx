import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Blog.css";
import BlogImage from './image.svg'

const Blog = () => {
  const shouldReduceMotion = useReducedMotion();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.3, once: false });

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
      className="uni-blog-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      aria-label="Blog Section"
    >
      <motion.div className="uni-blog-title" variants={titleVariants}>
        Blogs
      </motion.div>
      <div className="uni-blog-content" ref={contentRef}>
        <div className="uni-blog-image-container">
          <motion.img
            className="uni-blog-image"
            src={BlogImage} // Replace with actual image.svg
            alt="Blog feature illustration"
            variants={imageVariants}
            aria-label="Blog feature illustration"
          />
        </div>
        <motion.div className="uni-blog-text" variants={textVariants}>
          Discover a space built just for students—where helpful tips, inspiring stories, and practical advice come together to support your academic journey and personal growth. Whether you're looking for study hacks, productivity tools, or career guidance, our blog is designed to keep you informed, motivated, and ready to take on every challenge that comes your way.
        </motion.div>
      </div>
      <motion.div className="uni-blog-footer" variants={footerVariants}>
        Building a Better Tomorrow by Supporting Communities Today
      </motion.div>
    </motion.div>
  );
};

export default Blog;