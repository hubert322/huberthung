/* eslint-disable react/no-array-index-key */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import trendMicro from "../../assets/images/Trend-Micro-Logo.png";
import pictionary from "../../assets/images/pictionary.png";
import controlnet from "../../assets/images/controlnet.png";
import lazLogo from "../../assets/images/laz.png";
import engageMe from "../../assets/images/engage-me.png";
import pwa from "../../assets/images/pwa.png";
import canvas from "../../assets/images/canvas.png";
import lightDarkness from "../../assets/images/light-darkness.png";
import rubeGoldberg from "../../assets/images/rube-goldberg.png";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const subCards = [
    {
      title: "Pipeline + UI Automation",
      ribbon: "Internship",
      text: [
        `Implemented a pipeline that set Windows computers as nodes to transfer files back to Ansible server via Ansible, broadening automated testing’s capabilities into controlling Windows.`,
        `Designed a new BVT UI test case for deny list/allow list interface, from mindmap, to test case review, to implementation via WebdriverIO to automate UI testing and tcpreplay for package detection, resulting in finding 4 P3 bugs 2 weeks prior to release.`
      ],
      src: trendMicro,
      etc: "Internship | Taipei, Taiwan"
    },
    {
      title: "License Plate Detection Management/Control System",
      text: [
        `Developing a management/control system for the license plate detection system used in the office’s building parking lot to allow admins to specify various access controls for different groups`
      ],
      src: controlnet,
      etc: "Internship | Taipei, Taiwan"
    },
    {
      title: "Pictionary Live",
      text: [`An online, multiplayer version of pictionary!`],
      src: pictionary,
      size: "100% 100%",
      link: "https://pictionary.live",
      target: "_blank",
      etc: "Personal Project"
    },
    {
      title: "Reward Card System",
      text: [
        `Implemented a new feature that allows teachers to generate reward
      cards and students to redeem them through QR codes to increase student
      and teacher interaction with our products even offline.`
      ],
      src: lazLogo,
      link: "https://laz.huberthung.me",
      target: "_blank",
      etc: "Internship | Ann Arbor, MI"
    },
    {
      title: "EngageMe",
      src: engageMe,
      text: [
        `A Chrome extension that displays the most popular segments of 
      videos by tracking users’ video-watching activity through crowdsourcing`
      ],
      link: "https://github.com/rguan72/EngageMe-be",
      target: "_blank",
      etc: "MHacks XII"
    },
    {
      title: "PWA Example",
      src: pwa,
      text: [`Progressive Web App Demo!`],
      link: "https://github.com/hubert322/pwa-example",
      target: "_blank"
    },
    {
      title: "Blast Beat",
      src: null,
      text: [`Generate music from text files!!!`],
      link: "https://github.com/bowman3002/BlastBeatPy",
      target: "_blank"
    },
    {
      title: "Data Analysis on Canvas",
      src: canvas,
      text: [
        `Analyzed 300000+ lines of data to identify trends in course 
      completion rate.`
      ],
      link: "https://bit.ly/data-canvas",
      target: "_blank",
      etc: "MDataHack I"
    },
    {
      title: "Mobile Laser Tag",
      text: [
        `Created a 1v1 mobile laser tag game that uses computer vision to 
      track targets.`
      ],
      link: "https://bit.ly/mobile-laser-tag",
      target: "_blank",
      etc: "MHacks XI"
    },
    {
      title: "A Light in the Darkness",
      src: lightDarkness,
      size: "cover",
      text: [
        `This is a puzzle game where users use different objects to try to
      send the "light" to its destination.`
      ],
      link: "https://globalgamejam.org/2018/games/light-darkness-黑暗中的光芒",
      target: "_blank",
      etc: "GGJ 2018"
    },
    {
      title: "Rube Goldberg Machine",
      src: rubeGoldberg,
      size: "cover",
      text: [
        `Show the pollutions that mankind has made to the Earth and ways
      each of us can do to help save the Earth!`
      ],
      link: "./rubeGoldberg",
      target: "_self"
    }
  ];

  const { setRef } = props;

  return (
    <>
      <div ref={ref => setRef("Experience", ref)} />
      <ScrollAnimation
        className="section-container Experience-container"
        animateIn="fadeIn"
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-content Experience-content">
          {subCards.map((card, i) => (
            <Fragment key={`fragment-${i}`}>
              <div key={card.title} className="Experience-card">
                {card.src ? (
                  <div className="Experience-card-image-div">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="rounded Experience-card-image"
                    />
                  </div>
                ) : null}
                <div className="Experience-card-content">
                  <h4 className="Experience-card-title">{card.title}</h4>
                  {card.etc ? (
                    <p className="Experience-card-title">{card.etc}</p>
                  ) : null}
                  {card.text.map(text => (
                    <p key={text} className="Experience-card-text">
                      {text}
                    </p>
                  ))}
                  {card.link ? (
                    <a
                      className="Experience-learn-more-button"
                      href={card.link}
                      target={card.target}
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  ) : null}
                </div>
              </div>
              {i + 1 !== subCards.length ? (
                <div key={`divider${i}`} className="Experience-card-divider" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </ScrollAnimation>
    </>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
