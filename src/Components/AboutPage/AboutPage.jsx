import React from 'react';
import './AboutPage.css';
import Video from './Video.mp4';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="header">
        <h1 className="title">
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
        </h1>
        <p className="tagline">"Connect" "Collaborate" "Success"</p>
        <div className="auth-buttons">
          <button className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us ?</h2>
        <p>
          Unisphere is a student networking app designed to connect university students for academic collaboration, social networking, and career development. It offers features like secure messaging, event discovery, study groups, mentorship, freelancing opportunities, and psychological support to create a comprehensive platform for student engagement and growth.
        </p>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video className="centered-video" controls>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AboutPage;