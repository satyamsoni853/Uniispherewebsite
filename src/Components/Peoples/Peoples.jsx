import React from 'react';
import './Peoples.css';
import Images1 from './Images1.svg';
import Images2 from './Images1.svg';
import Images3 from './Images2.svg';
import Images4 from './Images3.svg';
import Images5 from './Images4.svg';
import Images6 from './Images4.svg';

function Peoples() {
  return (
    <div className="peoples-section">
      <h2 className='People-heading' >People</h2>
      {/* First Row: 4 People */}
      <div className="peoples-container">
        {/* Person 1 */}
        <div className="person-card color-1">
          <img src={Images1} alt="Himanshu" className="person-image" />
          <h3>"Himanshu"</h3>
          <p className="role">Business Manager</p>
          <p className="details">Student at Maters Union | Building a Startup | Want to be a sports person.</p>
        </div>

        {/* Person 2 */}
        <div className="person-card color-2">
          <img src={Images2} alt="Tarun" className="person-image" />
          <h3>"Tarun"</h3>
          <p className="role">Bachelors in UI/UX</p>
          <p className="details">Student at University of Delhi | Works at Unisphere | Previously worked in 3 different continents | Teamed up with Actress and Influencers.</p>
        </div>

        {/* Person 3 */}
        <div className="person-card color-3">
          <img src={Images3} alt="Shubham" className="person-image" />
          <h3>"Shubham"</h3>
          <p className="role">Nautical Science</p>
          <p className="details">Student at T.S Rahaman | Works at MOI | Working as a Cadet in Merchant Navy | Want to be a successful Navy Captain.</p>
        </div>

        {/* Person 4 */}
        <div className="person-card color-4">
          <img src={Images4} alt="Arshall" className="person-image" />
          <h3>"Arshall"</h3>
          <p className="role">MBA</p>
          <p className="details">Student at UFES | Works as Marketing Manager | Want to be a successful Expert | Likes to travel & ski.</p>
        </div>
      </div>

      {/* Second Row: 2 People */}
      <div className="peoples-container second-row">
        {/* Person 5 */}
        <div className="person-card color-5">
          <img src={Images5} alt="Priya" className="person-image" />
          <h3>"Priya"</h3>
          <p className="role">Computer Science</p>
          <p className="details">Student at IIT Bombay | Intern at TechCorp | Passionate about AI | Loves coding and hackathons.</p>
        </div>

        {/* Person 6 */}
        <div className="person-card color-6">
          <img src={Images6} alt="Rohan" className="person-image" />
          <h3>"Rohan"</h3>
          <p className="role">Mechanical Engineering</p>
          <p className="details">Student at NIT Trichy | Works on robotics projects | Aspires to be an innovator | Enjoys hiking.</p>
        </div>
      </div>
    </div>
  );
}

export default Peoples;