import React from "react";
import PropTypes from "prop-types";
import "./About.css";

function About(props) {
  const { setRef } = props;

  return (
    <div className="About" ref={setRef}>
      <h2 className="About-title">About</h2>
    </div>
  );
}

About.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default About;
