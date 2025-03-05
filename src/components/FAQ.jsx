import React, { useState } from "react";
import "./FAQ.css";
import Header from "./Header";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use a variety of tools, including Figma, Adobe XD, and Sketch for designing wireframes and UI mockups. For prototyping, I use tools like InVision and Framer. I also leverage user testing platforms such as Maze and Hotjar to gather feedback.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I measure success through usability testing, user feedback, and key performance metrics such as conversion rates, user retention, and task completion rates. Heatmaps and A/B testing also help refine the design for a better user experience.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <Header name="Frequently asked questions" />
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{item.question}</h4>
              </button>
              <div className="faq-answer">
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
