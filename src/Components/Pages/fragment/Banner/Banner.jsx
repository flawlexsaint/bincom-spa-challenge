import React from "react";
import "./Banner.css";

import Banner_img from "../../../Images/profile_pic.jpg";

const Banner = () => {
  return (
    <>
      <div className="banner" id="About">
        <div className="banner_text">
          <div className="">
            <h1 className="banner_header">Gabriel Njoabozia</h1>
            <p className="email">mails4gabriel@gmail.com</p>
            <p className="phone">08103413970</p>
            <p className="banner_text">
              A highly resourceful, competent, motivated, and enthusiastic
              individual with ability to work as part of a team in a fast-paced
              environment. Approachable, well groomed, and able to establish
              good working relationships with people across cultures.
            </p>
          </div>
        </div>
        <div className="banner_image">
          <img src={Banner_img} alt="" className="banner_img" />
        </div>
      </div>
    </>
  );
};

export default Banner;
