import React from "react";
import "./Banner.css";
import img1 from "/doradesign.png";
import img2 from "/sislia.png";
import img3 from "/wave.png";
import icon from "/icon.png";
import icon2 from "/icon2.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <h1 className="banner-title">
          I am a
          <img src={icon2} alt="Designer Icon" className="inline-icon" />
          Freelance Designer
          <img src={icon} alt="Designer Icon" className="inline-icon" />
          from San Francisco
        </h1>

        <div className="banner-content">
          <div className="image-grid">
            <img src={img1} alt="client1" className="grid-img" />
            <img src={img3} alt="client3" className="grid-img" />
            <img src={img2} alt="client2" className="grid-img" />
          </div>

          <div className="banner-text">
            <p>
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
