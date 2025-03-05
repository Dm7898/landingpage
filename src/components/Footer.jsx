import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "./Marquee";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Marquee />
      <div className="container">
        <div className="footer-conatiner">
          <h2 className="footer-title">LET’S TALK!</h2>

          <div className="footer-email">
            <p>rehanurraihan@gmail.com</p>
            <GoArrowUpRight className="arrow-icon" />
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; Rehan Raihan - 2023</p>

            <div className="social-links">
              <a href="#">Dribbble</a>
              <a href="#">Behance</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
