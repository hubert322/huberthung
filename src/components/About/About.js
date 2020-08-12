import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import profilePic from "../../assets/images/profile.jpg";
import "./About.css";

function About(props) {
  const { setRef } = props;

  return (
    <>
      <div ref={ref => setRef("About", ref)} />
      <ScrollAnimation className="section-container" animateIn="fadeIn">
        <h2 className="section-title animated fadeIn">About</h2>
        <div className="section-content About-content">
          <div className="col-md-4 About-profile">
            <img
              src={profilePic}
              alt="Profile Pic"
              className="img-fluid rounded animated fadeIn"
              style={{ animationDelay: "0.2s" }}
            />
            <h3
              className="About-profile-name animated fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              Hubert Tzu-Fan Hung
            </h3>
          </div>
          <div className="About-info col-md-8">
            <h3 className="animated fadeIn">
              University of Michigan, Ann Arbor
            </h3>
            <h3 className="animated fadeIn" style={{ animationDelay: "0.1s" }}>
              Computer Science Engineering
            </h3>
            <h3 className="animated fadeIn" style={{ animationDelay: "0.2s" }}>
              GPA: 3.70
            </h3>
            <div className="About-seperator" />
            <h3 className="animated fadeIn" style={{ animationDelay: "0.3s" }}>
              Skills
            </h3>
            <SkillTable />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

About.propTypes = {
  setRef: PropTypes.func.isRequired
};

function SkillTable() {
  const rows = {
    "C++": "80%",
    Python: "70%",
    React: "60%",
    AngularJs: "50%",
    Javascript: "50%",
    Flask: "40%",
    PHP: "40%",
    MySQL: "30%"
  };

  const others = [
    "MongoDB, ",
    "Socket.IO, ",
    "Git, ",
    "Jenkins, ",
    "Ansible, ",
    "WebdriverIO"
  ];

  return (
    <div className="container-fluid About-skills">
      {Object.keys(rows).map((skill, index) => (
        <div
          className="row About-skills-row animated fadeIn"
          key={skill}
          style={{ animationDelay: (index * 0.1 + 0.4).toString() + "s" }}
        >
          <h4 className="col-md-3">{skill}</h4>
          <div className="col-md-8 col-lg-9 About-bar-border">
            <div className="About-bar-filled" style={{ width: rows[skill] }} />
            <p className="About-bar-percent">{rows[skill]}</p>
          </div>
        </div>
      ))}
      <h4
        className="About-others animated fadeIn"
        style={{
          animationDelay:
            (Object.keys(rows).length * 0.1 + 0.4).toString() + "s"
        }}
      >
        Others: {others.map(skill => skill)}
      </h4>
    </div>
  );
}

export default About;
