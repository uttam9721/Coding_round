import React from "react";
import rightImage from '../assets/pexels-ekaterina-12203460.png';
import rightImage1 from '../assets/pexels-steve-johnson-1269968.png';
import rightImage2 from '../assets/pexels-pixabay-164455.png'

const sellers = [
  {
    bg: rightImage1,
    avatar: rightImage,
    name: "James Edward",
    role: "@TheRealJames"
  },
  {
    bg: rightImage,
    avatar: rightImage1,
    name: "Chris Den",
    role: "@TheRockArt"
  },
  {
    bg: rightImage2,
    avatar: rightImage2,
    name: "Emilie Jones",
    role: "@TheBoldWithinYou"
  },
  {
    bg: rightImage1,
    avatar: rightImage,
    name: "Jessica Williams",
    role: "@PaintItColorful"
  }
];

const RightSide = () => {
  return (
    <div className="seller-container">
      <div className="become-seller-btn">Become a Seller</div>

      <div className="tabs">
        <span className="active">Artists</span>
        <span>Photographers</span>
      </div>

      {sellers.map((seller, index) => (
        <div className="profile-card" key={index}>
          <img src={seller.bg} alt="Background" className="bg" />
          <div className="profile-info">
            <img src={seller.avatar} alt="Avatar" className="avatar" />
            <div className="details">
              <div>{seller.name}</div>
              <div>{seller.role}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="footer-links">
        <span>Privacy</span>
        <span>Terms of Service</span>
        <span>Cookie Notice</span>
      </div>
    </div>
  );
};

export default RightSide;
