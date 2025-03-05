import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import "./Navbar.css";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="hire-btn">Hire Me</button>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <RiMenu3Line />}
      </div>
    </nav>
  );
};

export default Navbar;
