import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './AboutPage.css';
import Video from './Video.mp4';

function AboutPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(true); // Default to true for safety
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { amount: 0.2 }); // Trigger every time 20% visible
  const isAboutInView = useInView(aboutRef, { amount: 0.2 }); // Trigger every time 20% visible

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

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
    console.log("AboutPage animation conditions:", {
      isHeaderInView,
      isAboutInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isHeaderInView, isAboutInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for title (from left)
  const titleVariants = {
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

  // Animation variants for description (from right)
  const descriptionVariants = {
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
    <div className="about-page">
      {/* Header Section */}
      <div className="header" ref={headerRef}>
        <motion.h1
          className="title"
          variants={isDesktopOrTablet && !shouldReduceMotion ? titleVariants : {}}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <span className="letter-u">U</span>
          <span className="letter-n">N</span>
          <span className="letter-i1">I</span>
          <span className="letter-i1">I</span>
          <span className="letter-s">S</span>
          <span className="letter-p">P</span>
          <span className="letter-h">H</span>
          <span className="letter-e">E</span>
          <span className="letter-r">R</span>
          <span className="letter-e2">E</span>
        </motion.h1>
        <p className="tagline">"Connect" "Collaborate" "Success"</p>
        <div className="auth-buttons">
          <button className="About-login-button">Log In</button>
          <button className="About-signup-button">Sign Up</button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section" ref={aboutRef}>
        <h2>About Us ?</h2>
        <motion.p
          className="our-goal-description"
          variants={isDesktopOrTablet && !shouldReduceMotion ? descriptionVariants : {}}
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
        >
          Unisphere is a student networking app designed to connect university students for academic collaboration, social networking, and career development. It offers features like secure messaging, event discovery, study groups, mentorship, freelancing opportunities, and psychological support to create a comprehensive platform for student engagement and growth.
        </motion.p>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-container">
          <video
            className="centered-video"
            autoPlay
            loop
            muted={isMuted}
            ref={videoRef}
            playsInline
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-controls">
            <button
              onClick={toggleMute}
              className={`mute-button ${isMuted ? 'muted' : ''}`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;