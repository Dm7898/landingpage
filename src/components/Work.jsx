import React from "react";
import "./Work.css";

import Header from "./Header";
const workData = [
  {
    image: "/work1.png",
    title: "Analysis Application",
    buttons: ["Figma", "UX"],
  },
  {
    image: "/work2.png",
    title: "Fortknox Application",
    buttons: ["Mobile", "Web"],
  },
  {
    image: "/work3.png",
    title: "Zenocide Application",
    buttons: ["App", "Web"],
  },
];

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="work-header">
          <Header name="Works" />
        </div>

        <div className="work-grid">
          {workData.map((item, index) => (
            <div className="work-card" key={index}>
              <div className="work-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="work-content">
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    With user-centered approach, the goals was to create an
                    intuitive interface for enhanced financial intelligence.
                  </p>
                  <div className="work-buttons">
                    <button className="btn-primary">{item.buttons[0]}</button>
                    <button className="btn-primary">{item.buttons[1]}</button>
                  </div>
                </div>
                <div className="case-study">
                  <button className="btn-case-study">View Case Study</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
