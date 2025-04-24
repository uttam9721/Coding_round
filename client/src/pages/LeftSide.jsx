import React from "react";
// import "../sidebar.css";
import { FiHome, FiBell, FiHeart, FiMessageCircle, FiCreditCard, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const LeftSide = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="logo">LOGO</div>
        <div className="menu">
          <div className="menu-item active"><FiHome /> Home</div>
          <div className="menu-item"><FiBell /> Notifications</div>
          <div className="menu-item"><FiHeart /> Shop</div>
          <div className="menu-item"><FiMessageCircle /> Conversation</div>
          <div className="menu-item"><FiCreditCard /> Wallet</div>
          <div className="menu-item"><FiUser /> Subscription</div>
          <div className="menu-item"><FiUser /> My Profile</div>
          <div className="menu-item"><FiSettings /> Settings</div>
        </div>
        <div className="logout"><FiLogOut /> Log out</div>
      </div>
      <div className="footer">
        <span>2022 logo name</span>
        <span>Developed by Ivan Infotech</span>
      </div>
    </div>
  );
};

export default LeftSide;
