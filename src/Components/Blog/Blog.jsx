import React from 'react';
import './Blog.css';
import Image from './image.svg'
 
const Blog = () => {
  return (
    <div className="uni-blog-container">
     
      <div className="uni-blog-title">Blogs</div>
      <div className="uni-blog-content">
        <div className="uni-blog-image-container">
         <img className='uni-blog-image' src={Image} alt="" />
        </div>
        <div className="uni-blog-text">
        Discover a space built just for students—where helpful tips, inspiring stories, and practical advice come together to support your academic journey and personal growth. Whether you're looking for study hacks, productivity tools, or career guidance, our blog is designed to keep you informed, motivated, and ready to take on every challenge that comes your way.
        </div>
      </div>
      <div className="uni-blog-footer">
      Building a Better Tomorrow by Supporting Communities Today
      </div>
    </div>
  );
};

export default Blog;