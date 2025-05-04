import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './AboutPage.css';
import Video from './Video.mp4';

function AboutPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const videoSectionRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { amount: 0.3, once: false });
  const isAboutInView = useInView(aboutRef, { amount: 0.3, once: false });
  const isVideoInView = useInView(videoSectionRef, { amount: 0.3, once: false });

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

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
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: i * 0.05,
      },
    }),
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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

  const headingVariants = {
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

  const descriptionVariants = {
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

  const videoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const letters = [
    { char: "U", class: "letter-u" },
    { char: "N", class: "letter-n" },
    { char: "I", class: "letter-i1" },
    { char: "I", class: "letter-i1" },
    { char: "S", class: "letter-s" },
    { char: "P", class: "letter-p" },
    { char: "H", class: "letter-h" },
    { char: "E", class: "letter-e" },
    { char: "R", class: "letter-r" },
    { char: "E", class: "letter-e2" },
  ];

  return (
    <motion.div
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="About Page"
    >
      {/* Header Section */}
      <motion.div className="header" ref={headerRef} variants={containerVariants}>
        <motion.h1
          className="title"
          animate={isHeaderInView && !shouldReduceMotion ? "visible" : "hidden"}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className={letter.class}
              variants={letterVariants}
              custom={i}
            >
              {letter.char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="tagline"
          variants={taglineVariants}
          animate={isHeaderInView && !shouldReduceMotion ? "visible" : "hidden"}
        >
          "Connect" "Collaborate" "Success"
        </motion.p>
        <motion.div
          className="auth-buttons"
          variants={containerVariants}
          animate={isHeaderInView && !shouldReduceMotion ? "visible" : "hidden"}
        >
          <motion.button
            className="About-login-button"
            variants={buttonVariants}
            aria-label="Log In"
          >
            Log In
          </motion.button>
          <motion.button
            className="About-signup-button"
            variants={buttonVariants}
            aria-label="Sign Up"
          >
            Sign Up
          </motion.button>
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="about-section"
        ref={aboutRef}
        variants={containerVariants}
        animate={isAboutInView && !shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.h2 variants={headingVariants}>About Us?</motion.h2>
        <motion.p className="our-goal-description" variants={descriptionVariants}>
          Unisphere is a student networking app designed to connect university students for academic collaboration, social networking, and career development. It offers features like secure messaging, event discovery, study groups, mentorship, freelancing opportunities, and psychological support to create a comprehensive platform for student engagement and growth.
        </motion.p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="video-section"
        ref={videoSectionRef}
        variants={containerVariants}
        animate={isVideoInView && !shouldReduceMotion ? "visible" : "hidden"}
      >
        <motion.div className="video-container" variants={videoVariants}>
          <video
            className="centered-video"
            autoPlay
            loop
            muted={isMuted}
            ref={videoRef}
            playsInline
            aria-label="Unisphere promotional video"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-controls">
            <button
              onClick={toggleMute}
              className={`mute-button ${isMuted ? 'muted' : ''}`}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            ></button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;