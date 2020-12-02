import React from "react";
import "./Skills.css";

import Gitbub from "../../../Images/skills/download.png";
import Sass from "../../../Images/skills/sass.png";
import React_icon from "../../../Images/skills/react-icon-0.jpg";
import Firebase from "../../../Images/skills/firebase.png";
import Html_Css from "../../../Images/skills/html-css.png";
import Bootstrap from "../../../Images/skills/bootstrap-layered.svg";

const Skills = () => {
  return (
    <>
      <h1 className="skills_header" id="Skills">
        Skills / Framework
      </h1>
      <div className="skills">
        <div className="skills_img_section">
          <div className="html_css">
            <img src={Html_Css} alt="" className="card_img" />
          </div>
          <div className="react">
            <img src={React_icon} alt="" className="card_img" />
          </div>
          <div className="bootstrap">
            <img src={Bootstrap} alt="" className="card_img" />
          </div>
          <div className="sass">
            <img src={Sass} alt="" className="card_img" />
          </div>
          <div className="firebase">
            <img src={Firebase} alt="" className="card_img" />
          </div>
          <div className="github">
            <img src={Gitbub} alt="" className="card_img" />
          </div>
        </div>
        <div className="skills_vector_section text-right">
          <div className="">
            <h5 className="skills_sub_header">HTML & CSS</h5>
            <h5 className="skills_sub_header">React</h5>
            <h5 className="skills_sub_header">Sass</h5>
            <h5 className="skills_sub_header">Firebase</h5>
            <h5 className="skills_sub_header">Bootstrap</h5>
            <h5 className="skills_sub_header">Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
