import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope
} from "react-icons/fa";
import "./Contact.css";
import "../../assets/styles/section.css";

function Contact(props) {
  const { setRef } = props;
  const contactText = `I am currently looking for an internship for summer 2020. 
    Whether if you just want to chat about technology, want to know me better, 
    or provide me with an opportunity, feel free to contact me via:
  `;

  return (
    <div className="section-container" ref={ref => setRef("Contact", ref)}>
      <h2 className="section-title">Contact</h2>
      <div className="container row flex-wrap">
        <h3>{contactText}</h3>
        <IconContext.Provider value={{ size: "5em", color: "white" }}>
          <a
            className="Contact-link"
            href="https://github.com/hubert322"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            className="Contact-link"
            href="https://www.linkedin.com/in/tzu-fan-hubert-hung"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="Contact-link"
            href="https://www.instagram.com/huberthung322"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a className="Contact-link" href="mailto:huberth@umich.edu">
            <FaRegEnvelope />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

Contact.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Contact;