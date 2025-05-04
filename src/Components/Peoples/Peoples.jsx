import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Peoples.css";
import Images1 from "./Images1.svg";
import Images2 from "./Images2.svg";
import Images3 from "./Images3.svg";
import Images4 from "./Images4.svg";

function Peoples() {
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
    console.log("Animation conditions:", {
      isInView,
      isDesktopOrTablet,
      shouldReduceMotion,
    });
  }, [isInView, isDesktopOrTablet, shouldReduceMotion]);

  // Animation variants for first row (from top)
  const topRowVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  // Animation variants for second row (from bottom)
  const bottomRowVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="peoples-section" ref={sectionRef}>
      <h2 className="People-heading">People</h2>
      {/* First Row: 4 People (from top) */}
      <div className="peoples-container">
        <motion.div
          className="person-card color-1"
          variants={isDesktopOrTablet && !shouldReduceMotion ? topRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <img src={Images1} alt="Himanshu" className="person-image" />
          <h3>Himanshu</h3>
          <p className="role">Business Manager</p>
          <p className="details">
            Student at Masters Union | Building a Startup | Wants to be a sports person.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-2"
          variants={isDesktopOrTablet && !shouldReduceMotion ? topRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          <img src={Images2} alt="Tarun" className="person-image" />
          <h3>Tarun</h3>
          <p className="role">Bachelors in UI/UX</p>
          <p className="details">
            Student at University of Delhi | Works at Unisphere | Previously worked in 3 different continents | Teamed up with Actress and Influencers.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-3"
          variants={isDesktopOrTablet && !shouldReduceMotion ? topRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
        >
          <img src={Images3} alt="Khushboo" className="person-image" />
          <h3>Khushboo</h3>
          <p className="role">MBA</p>
          <p className="details">
            Student at UPES | Works as a Marketing Manager | Wants to be a successful Marketing Expert | Likes to travel a lot.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-4"
          variants={isDesktopOrTablet && !shouldReduceMotion ? topRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
        >
          <img src={Images4} alt="Abhishek" className="person-image" />
          <h3>Abhishek</h3>
          <p className="role">BTech</p>
          <p className="details">
            Student at GNOIT | Works at Unisphere | Wants to be a data analyst | Likes to travel.
          </p>
        </motion.div>
      </div>

      {/* Second Row: 4 People (from bottom) */}
      <div className="peoples-container second-row">
        <motion.div
          className="person-card color-5"
          variants={isDesktopOrTablet && !shouldReduceMotion ? bottomRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <img src={Images1} alt="Ansh" className="person-image" />
          <h3>Ansh</h3>
          <p className="role">Computer Science</p>
          <p className="details">
            Student at Masters Union | Loves travelling.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-6"
          variants={isDesktopOrTablet && !shouldReduceMotion ? bottomRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          <img src={Images2} alt="Karthikey Pandey" className="person-image" />
          <h3>Karthikey Pandey</h3>
          <p className="role">Backend Developer</p>
          <p className="details">
            Student at UPES Dehradun | Passionate about Development | Loves coding and hackathons.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-7"
          variants={isDesktopOrTablet && !shouldReduceMotion ? bottomRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
        >
          <img src={Images3} alt="Satyam Soni" className="person-image" />
          <h3>Satyam Soni</h3>
          <p className="role">Frontend Developer</p>
          <p className="details">
            Student at KNIPSS | Works on Unisphere | Aspires to be a Developer | Enjoys Gaming.
          </p>
        </motion.div>

        <motion.div
          className="person-card color-8"
          variants={isDesktopOrTablet && !shouldReduceMotion ? bottomRowVariants : {}}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3}
        >
          <img src={Images4} alt="Priya" className="person-image" />
          <h3>Priya</h3>
          <p className="role">Computer Science</p>
          <p className="details">
            Student at Masters Union | Loves travelling.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Peoples;