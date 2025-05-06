import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Peoples.css";
import Images1 from "./Images1.svg";
import Images2 from "./Images2.svg";
import Images3 from "./Images3.svg";
import Images4 from "./Images4.svg";

function Peoples() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

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

  const cardVariants = {
    hidden: { y: (index) => (index < 4 ? -30 : 30), opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: (index % 4) * 0.1,
      },
    }),
  };

  const people = [
    {
      name: "Himanshu",
      role: "Business Manager",
      details: "Student at Masters Union | Building a Startup | Wants to be a sports person.",
      image: Images1,
      colorClass: "color-1",
      alt: "Himanshu profile image",
    },
    {
      name: "Tarun",
      role: "Bachelors in UI/UX",
      details: "Student at University of Delhi | Works at Unisphere | Previously worked in 3 different continents | Teamed up with Actress and Influencers.",
      image: Images2,
      colorClass: "color-2",
      alt: "Tarun profile image",
    },
    {
      name: "Khushboo",
      role: "MBA",
      details: "Student at UPES | Works as a Marketing Manager | Wants to be a successful Marketing Expert | Likes to travel a lot.",
      image: Images3,
      colorClass: "color-3",
      alt: "Khushboo profile image",
    },
    {
      name: "Abhishek",
      role: "BTech",
      details: "Student at GNOIT | Works at Unisphere | Wants to be a data analyst | Likes to travel.",
      image: Images4,
      colorClass: "color-4",
      alt: "Abhishek profile image",
    },
    {
      name: "Ansh",
      role: "Computer Science",
      details: "Student at Masters Union | Loves travelling.",
      image: Images1,
      colorClass: "color-5",
      alt: "Ansh profile image",
    },
    {
      name: "Kartikey Pandey",
      role: "Backend Developer",
      details: "Student at UPES Dehradun | Passionate about Development | Loves coding and hackathons.",
      image: Images2,
      colorClass: "color-6",
      alt: "Karthikey Pandey profile image",
    },
    {
      name: "Satyam Soni",
      role: "Frontend Developer",
      details: "Student at KNIPSS | Works on Unisphere | Aspires to be a Developer | Enjoys Gaming.",
      image: Images3,
      colorClass: "color-7",
      alt: "Satyam Soni profile image",
    },
    {
      name: "Priya",
      role: "Computer Science",
      details: "Student at Masters Union | Loves travelling.",
      image: Images4,
      colorClass: "color-8",
      alt: "Priya profile image",
    },
  ];

  return (
    <motion.div
      className="peoples-section"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && !shouldReduceMotion ? "visible" : "hidden"}
      ref={sectionRef}
      aria-label="People Section"
    >
      <motion.h2 className="People-heading" variants={headingVariants}>
        People
      </motion.h2>
      <div className="peoples-container">
        {people.slice(0, 4).map((person, index) => (
          <motion.div
            key={person.name}
            className={`person-card ${person.colorClass}`}
            variants={cardVariants}
            custom={index}
          >
            <img
              src={person.image}
              alt={person.alt}
              className="person-image"
              aria-label={person.alt}
            />
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p className="details">{person.details}</p>
          </motion.div>
        ))}
      </div>
      <div className="peoples-container second-row">
        {people.slice(4).map((person, index) => (
          <motion.div
            key={person.name}
            className={`person-card ${person.colorClass}`}
            variants={cardVariants}
            custom={index + 4}
          >
            <img
              src={person.image}
              alt={person.alt}
              className="person-image"
              aria-label={person.alt}
            />
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p className="details">{person.details}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Peoples;
