import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./Testimonial.css";
import quoteIcon from "/quote.png";
import avatar from "/avatar.png";
import Header from "./Header";

const testimonials = [
  {
    name: "Floyd Miles",
    title: "Ebay",
    text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: "Jane Cooper",
    title: "Amazon",
    text: "The UI/UX experience with Synergy was seamless. The intuitive design process makes it a top-tier product.",
  },
  {
    name: "Robert Fox",
    title: "Google",
    text: "I was amazed by how quickly I could build a high-quality resume with Synergy. It's a game-changer for job seekers.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-header">
          <Header name="What they say" />
        </div>

        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={avatar} alt="User Avatar" className="user-avatar" />
            <div>
              <h3 className="user-name">{testimonials[currentIndex].name}</h3>
              <p className="user-title">{testimonials[currentIndex].title}</p>
            </div>
          </div>
          <div className="testimonial-content">
            <img src={quoteIcon} alt="Quote Icon" className="quote-icon-bg" />
            <h4 className="testimonial-text">
              {testimonials[currentIndex].text}
            </h4>
          </div>
        </div>

        <div className="testimonial-nav">
          <button className="nav-btn" onClick={prevTestimonial}>
            <GoArrowLeft />
          </button>
          <button className="nav-btn" onClick={nextTestimonial}>
            <GoArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
