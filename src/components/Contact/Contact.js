import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/styles/section.css";
import "./Contact.css";

function Contact(props) {
  const { setRef } = props;
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const contactText = `I am currently looking for an internship for summer 2020. 
    Whether if you just want to chat about technology, want to know me better, 
    or provide me with an opportunity, feel free to contact me via:
  `;

  const mediumDeviceMinWidth = 768;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrWidth(window.innerWidth);
    });
  });

  return (
    <>
      <div ref={ref => setRef("Contact", ref)} />
      <ScrollAnimation className="section-container" animateIn="fadeIn">
        <h2 className="section-title">Contact</h2>
        <div className="section-content Contact-content">
          <h3 className="Contact-text">{contactText}</h3>
          <div className="Contact-icons">
            <IconContext.Provider
              value={{
                size: currWidth >= mediumDeviceMinWidth ? "5em" : "3em",
                color: "white"
              }}
            >
              <a
                className="Contact-link"
                href="https://github.com/hubert322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="Contact-link"
                href="https://www.linkedin.com/in/tzu-fan-hubert-hung"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="Contact-link"
                href="https://www.instagram.com/huberthung322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a className="Contact-link" href="mailto:huberth@umich.edu">
                <FaRegEnvelope />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

Contact.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Contact;
