import React from "react";
import "./EduValt.css";
import Image from "./image.svg";
import tagImage from "./tagimage.svg";

const EduValt = () => {
  return (
    <div className="EduValt-container">
      <div className="EduValt-title">Edu Valt</div>
      <div className="EduValt-content">
        <div className="EduValt-image-container">
          <img className="EduValt-image" src={Image} alt="" />
        </div>
        <div className="EduValt-text-and-tag-container">
          Here we Provide E-books, study guides, and reference materials, past
          papers, handmade notes, while features like search, bookmarks, and
          offline access improve usability.
          <div className="EduValt-tag-container">
            <div className="EduValt-each-tag">
              <img src={tagImage} alt="" />
              <span className="Eduvalt-tag-text">E-books</span>
            </div>
            <div className="EduValt-each-tag">
              <img src={tagImage} alt="" />
              <span className="Eduvalt-tag-text">Notes</span>
            </div>
            <div className="EduValt-each-tag">
              <img src={tagImage} alt="" />
              <span className="Eduvalt-tag-text">References</span>
            </div>
            <div className="EduValt-each-tag">
              <img src={tagImage} alt="" />
              <span className="Eduvalt-tag-text">Novels</span>
            </div>
          </div>
        </div>
      </div>
      <div className="EduValt-footer">Your Path to Smarter Learning</div>
    </div>
  );
};

export default EduValt;
