import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
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

export default Footer;
