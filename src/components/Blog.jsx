import React from "react";
import "./Blog.css";
import Header from "./Header";

const blogData = [
  {
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    img: "/blog1.png",
  },
  {
    date: "Aug 18, 2023",
    title: "Case Study - Analysis Application",
    tags: ["Design", "Print"],
    img: "/blog2.png",
  },
  {
    date: "Feb 16, 2023",
    title: "3 Ways to Develop Your Skill",
    tags: ["Figma", "Web"],
    img: "/blog3.png",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-header">
          <Header name="Blog" />
          <button className="view-all">View All</button>
        </div>

        <div className="blog-list">
          {blogData.map((blog, index) => (
            <div className="blog-item" key={index}>
              <div className="blog-img">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="blog-content">
                <p className="blog-date">{blog.date}</p>
                <h3 className="blog-title">{blog.title}</h3>

                <div className="blog-tags">
                  {blog.tags.map((tag, i) => (
                    <button key={i} className="tag-btn">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <button className="read-btn">Read</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
