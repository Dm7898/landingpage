import React from "react";
import star from "/star.png";
const images = [
  "/webflow.png",
  "/figma.png",
  "/designer.png",
  "/developer.png",
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((img, index) => (
          <div className="marquee-item" key={index}>
            {index >= 1 && <img src={star} className="star-icon" />}
            <img src={img} alt={`Image ${index + 1}`} className="marquee-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
