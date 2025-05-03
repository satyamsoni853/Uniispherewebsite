import React from 'react';
import './Connections.css';
import Image from './image.svg'
import bg from './bg.svg' 
const Connections = () => {
  return (
    <div className="main-connections-container">
      <div className="main-connections-header">Our Features</div>
      <div className="main-connections-title">Connections</div>
      <div className="main-connections-content">
        <div className="main-connections-image-container">
         <img className='main-connections-image' src={Image} alt="" />
        </div>
        <div className="main-connections-text">
          A feature that helps you discover students who truly get you — whether it's shared habits, music taste, study patterns, or late-night ramen cravings. Powered by vibe-based profiling and smart preferences, this tool connects you with like-minded individuals to build easy, natural friendships that feel effortless from day one.
        </div>
      </div>
      <div className="main-connections-footer">
        Because Real Connections Start With Familiar Vibes
      </div>
    </div>
  );
};

export default Connections;