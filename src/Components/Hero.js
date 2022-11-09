import React from "react";
import "../Components/Css/Hero.css";
import HeroImg from "../Assets/illustration-intro.svg";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="left-section">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="hero-button">
            <a href="#">Get Started</a>
          </div>
        </div>
        <div className="right-section">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
