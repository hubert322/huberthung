import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.svg";
import "./About.css";

function About(props) {
  const aboutTextIntro = `
    Hello, my name is Hubert (Tzu-Fan) Hung, a computer science study at the 
    University of Michigan, Ann Arbor. I enjoy creating stuff with different
    technology.
  `;

  const { setRef } = props;

  return (
    <div className="About" ref={ref => setRef("About", ref)}>
      <h2 className="About-title">About</h2>
      <div className="About-intro">
        <div className="About-text-div">
          <p className="About-text-intro">{aboutTextIntro}</p>
        </div>
        <div className="About-image-div">
          <img src={logo} alt="Profile Pic" className="About-image" />
        </div>
      </div>
      <div className="About-skills">
        <SkillTable />
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
              <td key={i}>*</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default About;
