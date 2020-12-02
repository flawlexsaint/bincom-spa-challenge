import React from "react";
import "./Qualification.css";

import Q_img from "../../../Images/fotox/q-img.jpg";

const Qualification = () => {
  return (
    <>
      <h1 className="qualification_header" id="Qualification">Qualification</h1>
      <div className="qualification">
        <div className="pane_1">
          <div className="">
            <div className="uni">
              <p className="q_header">
                Bachelor in Physics – <span className="q_date">2017</span>
              </p>
              <p className="q_text">
                Ekiti State University | Ado-Ekiti. Ekiti State, Nigeria Physics
              </p>
            </div>
            <div className="sec">
              <p className="q_header">
                Senior School Leaving Certificate –{" "}
                <span className="q_date">2011</span>
              </p>
              <p className="q_text">
                Orient Academy | Agbor, Delta State, Nigeria.
              </p>
            </div>
            <div className="pri">
              <p className="q_header">
                Nursery & Primary Education –{" "}
                <span className="q_date">2000</span>{" "}
              </p>
              <p className="q_text">
                Prince Charles Academy | Benin City, Edo State, Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div className="pane_2">
          <img src={Q_img} alt="" className="q_img" />
        </div>
      </div>
    </>
  );
};

export default Qualification;
