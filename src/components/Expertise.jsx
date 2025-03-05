import React from "react";
import "./Expertise.css";

import Header from "./Header";

const expertiseData = [
  {
    title: "Branding",
    para: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "Ui Design",
    para: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
  },
  {
    title: "UX Design",
    para: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
  },
  {
    title: "Development",
    para: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
  },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="container">
        <Header name="Expertise" />

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div className="expertise-item" key={index}>
              <h5 className="expertise-item-title">
                <span className="square-dot"></span> {item.title}
              </h5>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
