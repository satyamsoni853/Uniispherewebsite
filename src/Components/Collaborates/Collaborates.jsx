import React from 'react';
import Unispherelogo from './Unispherelogo.png'; // Unisphere logo
import Du from './Du.svg'; // DUSU logo
import './Collaborates.css'; // Import the CSS file for styling

function Collaborates() {
  return (
    <div className="collaborates-section">
      <h2 className="collaborates-title">Official Collaborates</h2>
      <div className="collaborates-content">
        {/* DUSU Logo and Label */}
        <div className="collaborate-item">
          <img src={Du} alt="DUSU Logo" className="collaborate-logo" />
          <p className="collaborate-label">DUSU (Delhi University <br />  Students Union)</p>
        </div>
        {/* Vertical Divider */}
        <div className="divider"></div>
        {/* Unisphere Logo and Label */}
        <div className="collaborate-item">
          <img src={Unispherelogo} alt="Unisphere Logo" className="collaborate-logo" />
          <p className="collaborate-label">Unisphere</p>
        </div>
      </div>
    </div>
  );
}

export default Collaborates;