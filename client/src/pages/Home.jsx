import React from 'react';
import postImage from '../assets/Component 32.svg';  // Search icon
import postImage1 from '../assets/Component 39 (2).svg';  // Filter icon
import postProfile from '../assets/pexels-ali-pazani-2613260.png';  // Filter icon
import Design from '../assets/pexels-humphrey-muleba-2045248.png';  // Filter icon
import Logo2 from '../assets/pexels-imad-clicks-9810659.png';  // Filter icon
import postImg from '../assets/pexels-tobias-bjørkli-2236382.png';  // Filter icon
import heart from '../assets/heart-1.svg';  // Filter icon
import comment from '../assets/comment-1.svg';  // Filter icon
import share from '../assets/share-1.svg';  // Filter icon
import ProductSlider from './ProductSlider';
const Home = () => {
  return (
    <>
    <div className="search-bar">
      <div className="search-input">
        <img src={postImage} className="search-icon" alt="search icon" />
        <input type="text" placeholder="Search here..." />
      </div>
      <button className="filter-btn">
        <img src={postImage1} className="filter-icon" alt="filter icon" />
        Filters
      </button>
    </div>
    {/* post logo images */}
    <div className='post.......'>
    <div className="post-card">
      <div className="post-header">
        <img src={postProfile} alt="avatar" className="avatar" />
        <div className="user-info">
          <strong>Lara Leones</strong>
          <p className="username">@thewallart</p>
        </div>
        <div className="dots">⋯</div>
      </div>

      <p className="post-text">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span>
      </p>

      <img src={Design} alt="post" className="post-img" />

      <div className="post-actions">
        <span><img src={heart} alt="" /> 9.8k</span>
        <span> <img src={comment} alt="" /> 8.6k</span>
        <span><img src={share} alt="" /> 7.2k</span>
      </div>
    </div>

    </div>
    <div>
    <div className='post.......'>
    <div className="post-card">
      <div className="post-header">
        <img src={Logo2} alt="avatar" className="avatar" />
        <div className="user-info">
          <strong>Lara Leones</strong>
          <p className="username">@thewallart</p>
        </div>
        <div className="dots">⋯</div>
      </div>

      <p className="post-text">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="read-more">Read More</span>
      </p>

      <img src={postImg} alt="post" className="post-img" />

      <div className="post-actions">
        <span><img src={heart} alt="" /> 9.8k</span>
        <span> <img src={comment} alt="" /> 8.6k</span>
        <span><img src={share} alt="" /> 7.2k</span>
      </div>
    </div>

    </div>
    </div>
    <div>
        <ProductSlider />
    </div>
    </>
  );
};

export default Home;
