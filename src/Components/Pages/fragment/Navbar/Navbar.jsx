import React from "react";
import "./Navbar.css";

import Logo from "../../../Images/Gabriel.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="#About" className="nav_link">
            About
          </a>
        </li>
        <li>
          <a href="#Skills" className="nav_link">
            Skills
          </a>
        </li>
        <li>
          <a href="#Work-experience" className="nav_link">
            Work Experience
          </a>
        </li>
        <li>
          <a href="#Qualification" className="nav_link">
            Qualification
          </a>
        </li>
        <li>
          <a href="#Link" className="nav_link">
            Links
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
