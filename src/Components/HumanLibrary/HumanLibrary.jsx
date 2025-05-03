import React from 'react';
import './HumanLibrary.css';
import Image from './image.svg'
 
const HumanLibrary = () => {
  return (
    <div className="human-library-container">
       
      <div className="human-library-title">HUMAN LIBRARY</div>
      <div className="human-library-content">
        <div className="human-library-image-container">
         <img className='human-library-image' src={Image} alt="" />
        </div>
        <div className="human-library-text">
        A feature that allows individuals to share their stories, discuss their challenges, and seek guidance from others. Using a matching algorithm, you will be paired with people who can offer support, insights, or advice, creating meaningful connections with those they may not know
        </div>
      </div>
      <div className="human-library-footer">
      A Community That Cares About What You Feels and Who You Are
      </div>
    </div>
  );
};

export default HumanLibrary;