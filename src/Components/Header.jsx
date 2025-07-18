import React from "react";
import logo1 from "../assets/images/image.png"; // IoT SPACE
import logo2 from "../assets/images/Logo.png"; // Maruti Suzuki
import home from "../assets/images/Home.png";
import person from "../assets/images/person-fill.svg";
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      <a href="#"><img src={logo1} className="logo1" alt="IoT Logo" /></a>
      <img src={logo2} className="logo2" alt="Maruti Logo" />

      <div className="user-section">
        <img src={home} className="home-icon" alt="Home" />
        <div className="custom-select-wrapper">
          <select defaultValue="">
            <option value="" disabled>John Smith</option>
          </select>
          <span>
            <img src={person} alt="person" />▼
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
