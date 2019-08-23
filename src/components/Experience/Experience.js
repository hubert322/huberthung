import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Experience.css";
import "../../assets/styles/section.css";

function Experience(props) {
  const subCardTitles = [
    "Data Analysis on Canvas",
    "Mobile Phone Laser Tag",
    "A Light in the Darkness",
    "Rube Goldberg Machine"
  ];

  const { setRef } = props;
  const [cardDetail, setCardDetail] = useState(null);

  function showCardDetail(event) {
    setCardDetail(event.currentTarget.innerText);
  }

  function hideCardDetail() {
    setCardDetail(null);
  }

  return (
    <div className="section-container" ref={ref => setRef("Experience", ref)}>
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div
          className="Experience-main-card"
          onMouseEnter={showCardDetail}
          onMouseLeave={hideCardDetail}
        >
          <h3 className="Experience-card-title">Learning A-Z</h3>
          {cardDetail === "Learning A-Z" ? <CardDetail /> : null}
        </div>
        <div className="Experience-sub-div">
          {subCardTitles.map(title => (
            <div
              key={title}
              className="Experience-sub-card"
              onMouseEnter={showCardDetail}
              onMouseLeave={hideCardDetail}
            >
              <h4 className="Experience-card-title">{title}</h4>
              {cardDetail === title ? <CardDetail /> : null}
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

function CardDetail() {
  return (
    <div className="Experience-overlay">
      <button className="Card-Detail-button" type="button">
        Learn More
      </button>
    </div>
  );
}

export default Experience;
