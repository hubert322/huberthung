import React from "react";
import PropTypes from "prop-types";
import "./Experience.css";

function Experience(props) {
  const { setRef } = props;

  return (
    <div className="Experience" ref={ref => setRef("Experience", ref)}>
      <h2 className="Experience-title">Experience</h2>
    </div>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
