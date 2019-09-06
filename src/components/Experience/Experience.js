import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const mainCard = {
    title: "Learning A-Z",
    text: `Implemented a new feature that allows teachers to generate reward
    cards and students to redeem them through QR codes to increase student
    and teacher interaction with our products even offline.`,
    link: "http://laz.huberthung.me"
  };

  const subCards = {
    mDataHackI: {
      title: "MDataHackI: Data Analysis on Canvas",
      text: `Analyzed 300000+ lines of data to identify trends in course 
      completion rate and presented and made suggestions to Canvas moderators.`,
      link: "./mDataHackI"
    },
    mHacksXI: {
      title: "MHacks XI: Mobile Laser Tag",
      text: `Created a 1v1 mobile laser tag game that uses computer vision to 
      track targets.`,
      link: "./mHacksXI"
    },
    ggj2018: {
      title: "GGJ 2018: A Light in the Darkness",
      text: `This is a puzzle game where users use different objects to try to 
      send the "light" to its destination.`,
      link: "./ggj2018"
    },
    rubeGoldberg: {
      title: "Technion Rube Goldberg Machine",
      text: `Using chain reactions to show the pollutions that mankind has made 
      to the Earth and ways each of us can do to help save the Earth!`,
      link: "./rubeGoldberg"
    }
  };

  const { setRef } = props;
  const [overlay, setOverlay] = useState(null);

  function showOverlay(event) {
    const titleIndex = 0;
    setOverlay(event.currentTarget.childNodes[titleIndex].innerText);
  }

  function hideOverlay() {
    setOverlay(null);
  }

  return (
    <div className="section-container" ref={ref => setRef("Experience", ref)}>
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div
          className="Experience-main-card"
          onMouseEnter={showOverlay}
          onMouseLeave={hideOverlay}
        >
          <h3 className="Experience-card-title">{mainCard.title}</h3>
          <p className="Experience-card-title">{mainCard.text}</p>
          {overlay === mainCard.title ? (
            <div className="Experience-overlay">
              <a
                className="Experience-overlay-button"
                href={mainCard.link}
                target="blank"
              >
                Learn More
              </a>
            </div>
          ) : null}
        </div>
        <div className="Experience-sub-div">
          {Object.values(subCards).map(card => (
            <div
              key={card.title}
              className="Experience-sub-card"
              onMouseEnter={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <h4 className="Experience-card-title">{card.title}</h4>
              <p className="Experience-card-title">{card.text}</p>
              {overlay === card.title ? (
                <div className="Experience-overlay">
                  <a className="Experience-overlay-button" href={card.link}>
                    Learn More
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
