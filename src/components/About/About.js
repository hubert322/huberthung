import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiCheckSquare } from "react-icons/fi";
import profilePic from "../../assets/images/profile.jpg";
import "./About.css";

function About(props) {
  const basicInfoTextContent = `
    Hello, my name is Hubert (Tzu-Fan) Hung, a computer science study at the 
    University of Michigan, Ann Arbor. I enjoy creating stuff with different
    technology.
  `;

  const { setRef } = props;
  const basicInfoImage = useRef();
  const basicInfoText = useRef();
  const [basicInfoImageWidth, setBasicInfoImageWidth] = useState();

  useEffect(() => {
    setBasicInfoImageWidth(
      basicInfoImage.current.getBoundingClientRect().width
    );
  });

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
          <p
            className="About-basic-info-text"
            ref={basicInfoText}
            style={{ width: basicInfoImageWidth }}
          >
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
