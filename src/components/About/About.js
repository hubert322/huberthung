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
            <h4 className="animated fadeIn">Sep 2018 - Dec 2021</h4>
            <h4 className="animated fadeIn" style={{ animationDelay: "0.1s" }}>
              B.S.E. Computer Science Engineering
            </h4>
            <h4 className="animated fadeIn" style={{ animationDelay: "0.2s" }}>
              GPA: 3.77
            </h4>
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
    Javascript: "50%",
    Go: "20%",
    "Spring Boot": "20%",
    SQL: "40%",
    Git: "50%",
    AWS: "20%"
  };

  const others = [
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Ansible",
    "Jenkins",
    "WebdriverIO",
    "Socket.io",
    "React",
    "AnguarlJs",
    "PHP",
    "Flask"
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
        Others:{" "}
        {others.map((skill, index) => {
          return index != others.length - 1 ? `${skill}, ` : skill;
        })}
      </h4>
    </div>
  );
}

export default About;
