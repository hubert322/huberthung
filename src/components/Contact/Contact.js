import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import "../../assets/styles/section.css";

function Contact(props) {
  const { setRef } = props;

  return (
    <div className="section-container" ref={ref => setRef("Contact", ref)}>
      <h2 className="section-title">Contact</h2>
      <div className="container row flex-wrap">
        <div className="col-8">
          <p>
            LMAO
          </p>
        </div>
        <div className="col-4">
          <p>
            HELLOHELLO
          </p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Contact;
