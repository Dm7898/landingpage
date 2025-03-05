import React from "react";
import "./Experience.css";
import Header from "./Header";

const experienceData = [
  {
    title: "Lead Product Designer",
    company: "Fortknox",
    date: "Mar 2022 - Oct 2023",
  },
  {
    title: "Intern Designer",
    company: "OmniSafe",
    date: "Jan 2021 - Dec 2021",
  },
  {
    title: "UI Designer",
    company: "Doradesign",
    date: "Jun 2020 - Dec 2020",
  },
  {
    title: "Frontend Developer",
    company: "OpacityAuthor",
    date: "Feb 2019 - May 2020",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <div className="experience-header">
          <Header name="Experience" />
        </div>

        <div className="experience-list">
          {experienceData.map((item, index) => (
            <div className="experience-item" key={index}>
              <h4 className="experience-left">{item.title}</h4>
              <div className="experience-right">
                <h5>{item.company}</h5>
                <div className="experience-date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
