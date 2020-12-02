import React from "react";
import "./Header.css";

import Grid_1 from "../../../Images/header/0.jpg";
import Grid_2 from "../../../Images/header/1.jpg";
import Grid_3 from "../../../Images/header/2.jpg";
import Grid_4 from "../../../Images/header/3.jpg";
import Grid_5 from "../../../Images/header/4.jpg";
import Grid_6 from "../../../Images/header/5.jpg";
import Grid_7 from "../../../Images/header/6.jpg";
import Grid_8 from "../../../Images/header/7.jpg";
import Grid_9 from "../../../Images/header/8.jpg";
import Grid_10 from "../../../Images/header/9.jpg";
import Grid_11 from "../../../Images/header/10.jpg";
import Grid_12 from "../../../Images/header/11.jpg";
import Grid_13 from "../../../Images/header/12.jpg";
import Grid_14 from "../../../Images/header/13.jpg";
import Grid_15 from "../../../Images/header/14.jpg";

const Header = () => {
  return (
    <>
      <h1 className="gallery">Gallery</h1>
      <div className="header">
        <div className="image_grid">
          <div className="grid_1">
            <img src={Grid_1} alt="" className="img_grid" />
          </div>
          <div className="grid_2">
            <img src={Grid_2} alt="" className="img_grid" />
          </div>
          <div className="grid_3">
            <img src={Grid_3} alt="" className="img_grid" />
          </div>
          <div className="grid_4">
            <img src={Grid_4} alt="" className="img_grid" />
          </div>
          <div className="grid_5">
            <img src={Grid_5} alt="" className="img_grid" />
          </div>
          <div className="grid_6">
            <img src={Grid_6} alt="" className="img_grid" />
          </div>
          <div className="grid_7">
            <img src={Grid_7} alt="" className="img_grid" />
          </div>
          <div className="grid_8">
            <img src={Grid_8} alt="" className="img_grid" />
          </div>
          <div className="grid_9">
            <img src={Grid_9} alt="" className="img_grid" />
          </div>
          <div className="grid_10">
            <img src={Grid_10} alt="" className="img_grid" />
          </div>
          <div className="grid_11">
            <img src={Grid_11} alt="" className="img_grid" />
          </div>
          <div className="grid_12">
            <img src={Grid_12} alt="" className="img_grid" />
          </div>
          <div className="grid_13">
            <img src={Grid_13} alt="" className="img_grid" />
          </div>
          <div className="grid_14">
            <img src={Grid_14} alt="" className="img_grid" />
          </div>
          <div className="grid_15">
            <img src={Grid_15} alt="" className="img_grid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
