import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const mainCardTitle = "Learning A-Z";
  const subCardTitles = [
    "Data Analysis on Canvas",
    "Mobile Phone Laser Tag",
    "A Light in the Darkness",
    "Rube Goldberg Machine"
  ];

  const { setRef } = props;
  const [overlay, setOverlay] = useState(null);
  const [cardDetailCardTitle, setCardDetailCardTitle] = useState(null);

  function showOverlay(event) {
    setOverlay(event.currentTarget.innerText);
  }

  function hideOverlay() {
    setOverlay(null);
  }

  function showCardDetail(cardTitle) {
    hideOverlay();
    setCardDetailCardTitle(cardTitle);
  }

  function chooseCardDetail() {
    switch (cardDetailCardTitle) {
      case "Learning A-Z":
        return <Laz />;
      default:
        return <p>NULL</p>;
    }
  }

  function hideCardDetail() {
    setCardDetailCardTitle(null);
  }

  if (cardDetailCardTitle !== null) {
    return (
      <div className="section-container" ref={ref => setRef("Experience", ref)}>
        <div className="Experience-card-detail-title-div">
          <IconContext.Provider value={{ color: "white", size: "3rem" }}>
            <button type="button" onClick={hideCardDetail}>
              <IoIosArrowBack />
            </button>
          </IconContext.Provider>
          <h2 className="section-title Experience-card-detail-title">
            {cardDetailCardTitle}
          </h2>
        </div>
        <div className="section-content Experience-card-detail-content">
          {chooseCardDetail()}
        </div>
      </div>
    );
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
          <h3 className="Experience-card-title">{mainCardTitle}</h3>
          {overlay === mainCardTitle ? (
            <Overlay onClick={showCardDetail} cardTitle={mainCardTitle} />
          ) : null}
        </div>
        <div className="Experience-sub-div">
          {subCardTitles.map(title => (
            <div
              key={title}
              className="Experience-sub-card"
              onMouseEnter={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <h4 className="Experience-card-title">{title}</h4>
              {overlay === title ? (
                <Overlay onClick={showCardDetail} cardTitle={title} />
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

function Overlay(props) {
  const { onClick, cardTitle } = props;

  return (
    <div className="Experience-overlay">
      <button
        className="Experience-overlay-button"
        type="button"
        onClick={() => onClick(cardTitle)}
      >
        Learn More
      </button>
    </div>
  );
}

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  cardTitle: PropTypes.string.isRequired
};

function Laz() {
  return (
    <>
      <p>
        I implemented a new feature that allows teachers to generate reward
        cards and students to redeem them through QR codes to increase student
        and teacher interaction with our products even offline
      </p>
      <button className="Experience-overlay-button" type="button">
        View Demo
      </button>
    </>
  );
}

export default Experience;
