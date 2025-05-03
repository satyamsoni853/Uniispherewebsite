import React, { useState } from 'react';
import './Features.css'; // Import the CSS file for styling

// Import all SVGs and PNG
import Event from './Event.svg';
import Freelancing from './Freelancing.svg';
import Guide from './Guide.svg';
import Ngo from './Ngo.svg';
import Skill from './Skill.png'; // Note: This is a PNG, not an SVG

function Features() {
  // Array of slides with their content and corresponding icons
  const slides = [
    {
      title: "NGO'S",
      description: "Empowering Communities Today for a Stronger Tomorrow",
      icon: Ngo, // Use the imported Ngo.svg
    },
    {
      title: "GUIDENEST",
      description: "A Journey of Learning, Led by Those Who’ve Been There",
      icon: Guide, // Use the imported Guide.svg
    },
    {
      title: "FREELANCING",
      description: "Work, Earn, Grow – ALL While Staying in Your Zone",
      icon: Freelancing, // Use the imported Freelancing.svg
    },
    {
      title: "SKILL-UP",
      description: "Learn, Improve, and Evolve – One Step at a Time",
      icon: Skill, // Use the imported Skill.png
    },
    {
      title: "EVENTS",
      description: "Explore and Join Events Happening in Colleges",
      icon: Event, // Use the imported Event.svg
    },
  ];

  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Functions to handle navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="features-section">
      <h2 className="features-title">Upcomming Features</h2>
      <div className="slider-container">
        {/* Left Arrow */}
        

        {/* Slide Content */}
        <div className="slide">
          <div className="slide-content">
            {/* Feature Icon */}
            <img
              src={slides[currentSlide].icon}
              alt={slides[currentSlide].title}
              className="feature-icon"
            />
            {/* Text Content */}
            <div className="slide-text">
              <h3 className="slide-title">{slides[currentSlide].title}</h3>
              <p className="slide-description">{slides[currentSlide].description}</p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="slider-arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Features;