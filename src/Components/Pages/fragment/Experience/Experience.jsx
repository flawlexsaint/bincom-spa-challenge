import React from "react";
import "./Experience.css";

import Grid_img from "../../../Images/fotox/experience.jpg";
import Grid_img_2 from "../../../Images/fotox/719.jpg";

const Experience = () => {
  return (
    <>
      <h1 className="experience_section_header" id="Work-experience">
        Experience
      </h1>
      <div className="experience">
        <div className="experience_img_section">
          <img src={Grid_img} alt="" className="experience_img" />
        </div>
        <div className="experience_section">
          <div className="">
            <h1 className="experience_header">
              Front End Developer –{" "}
              <span className="intern">Remote Intern</span>
            </h1>
            <p className="experience_sub_header">CIVIZ, Wuse, Abuja</p>
            <p className="experience_date">June, 2020</p>
            <ul>
              <li>Determining the structure and design of web pages</li>
              <li>Developing features to enhance the user experience</li>
              <li>Ensuring web design is optimized for smartphones</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience_2">
        <div className="experience_section">
          <div className="">
            <h1 className="experience_header">Verbatim Court Reporter</h1>
            <p className="experience_sub_header">
              High Court, Benin, Edo State
            </p>
            <p className="experience_date">March, 2019</p>
            <ul>
              <li>Tasked with transcript production</li>
              <li>Transcribing speech into written records in realtime</li>
            </ul>
          </div>
        </div>
        <div className="">
          <img src={Grid_img_2} alt="" className="experience_img_2" />
        </div>
      </div>
    </>
  );
};

export default Experience;
