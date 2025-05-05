import React, { useState } from 'react';
import './Features.css'; // Import the CSS file for styling

// Import all SVGs and PNG
import Eventbg from './Eventbg.svg'; // Assuming Eventbg.svg is in the same directory
import Freelancingbg from './Freelancingbg.svg'; // Assuming Freelancingbg.svg is in the same directory
import Guidenestbg from './Guidenestbg.svg'; // Assuming Guidenestbg.svg is in the same directory
import Skillbg from './Skillbg.svg'; // Assuming Skillbg.svg is in the same directory
import NGObg from './NGObg.svg'; // Assuming Ngobg.svg is in the same directory
import { SiNginxproxymanager } from 'react-icons/si';
import Event from './Event.svg';
import Freelancing from './Freelancing.svg';
import Guide from './Guide.svg';
import Ngo from './Ngo.svg';
import Skill from './skill.png'; // Note: This is a PNG, not an SVG

function Features() {
  // Array of slides with their content and corresponding icons
  const slides = [
    {
      title: "NGO'S",
      description: "Empowering Communities Today for a Stronger Tomorrow",
      icon: Ngo, // Use the imported Ngo.svg
      BG: NGObg, // Use the imported Ngobg.svg
      bgColor: "#FFE5E5"
    },
    {
      title: "GUIDENEST",
      description: "A Journey of Learning, Led by Those Who’ve Been There",
      icon: Guide, // Use the imported Guide.svg
      BG: Guidenestbg, // Use the imported Guidenestbg.svg
      bgColor: "#EDE8E9"

    },
    {
      title: "FREELANCING",
      description: "Work, Earn, Grow – ALL While Staying in Your Zone",
      icon: Freelancing, // Use the imported Freelancing.svg
      BG: Freelancingbg, // Use the imported Freelancingbg.svg
      bgColor: "#FFEFE2"
    },
    {
      title: "SKILL-UP",
      description: "Learn, Improve, and Evolve – One Step at a Time",
      icon: Skill, // Use the imported Skill.png
      BG: Skillbg, // Use the imported Skillbg.svg
      bgColor: "#F8ECDD"
    },
    {
      title: "EVENTS",
      description: "Explore and Join Events Happening in Colleges",
      icon: Event, // Use the imported Event.svg
      BG: Eventbg, // Use the imported Eventbg.svg
      bgColor: "#e7feeb"
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
          <div
            style={{
              backgroundColor: slides[currentSlide].bgColor
            }}
            className="slide-content">
            {/* Feature Icon */}
            <div

              className="slide-image-container">
              <img className='slide-image-bg-image' src={slides[currentSlide].BG} alt="" />
              <img

                src={slides[currentSlide].icon}
                alt={slides[currentSlide].title}
                className="feature-icon"
              />
            </div>
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
