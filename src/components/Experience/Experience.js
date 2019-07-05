import React from "react";
import PropTypes from "prop-types";
import "./Experience.css";
import "../../assets/styles/section.css";

function Experience(props) {
  const { setRef } = props;

  return (
    <div className="section-container" ref={ref => setRef("Experience", ref)}>
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="Experience-main-card">
          <h3 className="Experience-card-title">Learning A-Z</h3>
        </div>
        <div className="Experience-sub-div">
          <div className="Experience-sub-card">
            <h4 className="Experience-card-title">Data Analysis on Canvas</h4>
          </div>
          <div className="Experience-sub-card">
            <h4 className="Experience-card-title">Mobile Phone Laser Tag</h4>
          </div>
          <div className="Experience-sub-card">
            <h4 className="Experience-card-title">A Light in the Darkness</h4>
          </div>
          <div className="Experience-sub-card">
            <h4 className="Experience-card-title">Rube Goldberg Machine</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
