import React from "react";
import Logo from "../Assets/logo.svg";
import "../Components/Css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-flex-cointainer">
        <div className="nav-logo">
          <img src={Logo} />
        </div>
        <div className="nav-links">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
        <div className="nav-button">
          <a href="#"> Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
