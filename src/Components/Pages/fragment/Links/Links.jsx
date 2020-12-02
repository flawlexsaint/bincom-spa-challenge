import React from "react";
import "./Links.css";

import Borome from "../../../Images/fotox/borome.jpg";
import Landing from "../../../Images/fotox/landing.jpg";
import Portal from "../../../Images/fotox/school-portal.jpg";

const Links = () => {
  return (
    <>
      <h1 className="link_header" id="Link">
        Project Links
      </h1>
      <div className="links">
        <div className="pane_one">
          <a href="https://loan-project.netlify.app/" className="">
            <img src={Borome} alt="" className="link_img" />
            <p className="link_caption">Borome.ng Prototype</p>
          </a>
        </div>
        <div className="pane_one">
          <a href="https://project-102.netlify.app/" className="">
            <img src={Landing} alt="" className="link_img" />
            <p className="link_caption">School Landing Page</p>
          </a>
        </div>
        <div className="pane_one">
          <a href="https://project-103.netlify.app/" className="">
            <img src={Portal} alt="" className="link_img" />
            <p className="link_caption">School Portal</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
