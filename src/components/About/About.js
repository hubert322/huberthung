import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiCheckSquare } from "react-icons/fi";
import profilePic from "../../assets/images/profile.jpg";
import "./About.css";

function About(props) {
  const basicInfoTextContent = `
    Tzu-Fan Hung
  `;

  const { setRef } = props;
  const basicInfoImage = useRef();
  const basicInfoText = useRef();
  const [basicInfoImageWidth, setBasicInfoImageWidth] = useState();

  // useEffect(() => {
  //   setBasicInfoImageWidth(
  //     basicInfoImage.current.getBoundingClientRect().width
  //   );
  // });

  return (
    <div className="section-container" ref={ref => setRef("About", ref)}>
      <h2 className="section-title">About</h2>
      <div className="section-content">
        <div className="col-4">
          <img
            src={profilePic}
            alt="Profile Pic"
            className="img-fluid rounded"
            ref={basicInfoImage}
          />
          <h3 className="About-basic-info-text" ref={basicInfoText}>
            {basicInfoTextContent}
          </h3>
        </div>
        <div className="col-md-8">
          <h3>University of Michigan, Ann Arbor</h3>
          <h3>Computer Science Engineering</h3>
          <h3>GPA: 3.83</h3>
          <SkillTable />
        </div>
      </div>
    </div>
  );

  return (
    <div className="section-container" ref={ref => setRef("About", ref)}>
      <h2 className="section-title">About</h2>
      <div className="section-content">
        <div className="About-basic-info">
          <img
            src={profilePic}
            alt="Profile Pic"
            className="About-basic-info-image"
            ref={basicInfoImage}
          />
          <p className="About-basic-info-text" ref={basicInfoText}>
            {basicInfoTextContent}
          </p>
        </div>
        <div className="About-skills">
          <SkillTable />
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  setRef: PropTypes.func.isRequired
};

function SkillTable() {
  const column = ["", "Beginner", "Elementary", "Intermediate"];
  const rows = {
    "C++": "Intermediate",
    Javascript: "Elementary",
    React: "Elementary",
    AngularJs: "Elementary",
    Python: "Elementary",
    Pandas: "Elementary"
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {column.map(column => (
          <h4 className="col-md-3" key={column}>
            {column}
          </h4>
        ))}
      </div>
      {Object.keys(rows).map(skill => (
        <div className="row" key={skill}>
          <h4 className="col-md-3">{skill}</h4>
          {Array.from(Array(column.indexOf(rows[skill])), (_, i) => (
            <div className="col-md-3" key={i}>
              <FiCheckSquare />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <table>
      <thead>
        <tr>
          {column.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(rows).map(skill => (
          <tr key={skill}>
            <td>{skill}</td>
            {Array.from(Array(column.indexOf(rows[skill])), (_, i) => (
              <td key={i} align="right">
                <FiCheckSquare />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default About;
