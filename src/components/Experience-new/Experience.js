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
import zoom from "../../assets/images/zoom.jpg";
import godOfPaperPlane from "../../assets/images/god-of-paper-plane.png";
import letUsOut from "../../assets/images/let-us-out-3.png";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const subCards = [
    {
      title: "CI Pipeline + Automated UI Testing",
      ribbon: "Internship",
      text: [
        `Developed on deployment pipeline for a cybersecurity network monitoring product Deep Discovery Inspector using Ansible, Jenkins, and WebdriverIO`
      ],
      src: trendMicro,
      etc: "Internship @ Trend Micro | Taipei, Taiwan | Jul 2020 - Aug 2020"
    },
    {
      title: "License Plate Detection Management/Control System",
      text: [
        `Developed a distributed management/control system in Javascript, PHP, MySQL, C, modbus, and inotify to receive and send signal to grant or deny permissions for 100+ license plates everyday`
      ],
      src: controlnet,
      etc:
        "Internship @ Controlnet International | Taipei, Taiwan | May 2020 - Jun 2020"
    },
    {
      title: "Pictionary Live",
      text: [
        `An online, multiplayer version of pictionary developed using React, Flask, MongoDB, and Socket.io that allows synchronous events such as joining room, drawing, and messaging to happen simultaneously across connected clients!`
      ],
      src: pictionary,
      size: "100% 100%",
      link: "https://pictionary.live",
      target: "_blank",
      etc: "Personal Project | May 2020 - Aug 2020"
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
      etc: "MHacks XII | Oct 2019"
    },
    {
      title: "Reward Card System",
      text: [
        `Designed and implemented a new full stack feature on both web and mobile that allows teachers to generate reward cards and students to redeem them using AngularJs, PHP, MySQL, Java, and Swift`
      ],
      src: lazLogo,
      link: "https://laz.huberthung.me",
      target: "_blank",
      etc: "Internship @ Learning A-Z | Ann Arbor, MI | May 2019 - Aug 2019"
    },
    {
      title: "PWA Example",
      src: pwa,
      text: [`Progressive Web App Demo!`],
      link: "https://github.com/hubert322/pwa-example",
      target: "_blank",
      etc: "Jun 2019"
    },
    {
      title: "Blast Beat",
      src: null,
      text: [`Generate music from text files!!!`],
      link: "https://github.com/bowman3002/BlastBeatPy",
      target: "_blank",
      etc: "May 2019"
    },
    {
      title: "Data Analysis on Canvas",
      src: canvas,
      text: [
        `Analyzed 300,000+ lines of data using Numpy, Matplotlib, and pandas, resulting in 10 categorial features, 7513 training data, and 1851 validation data`
      ],
      link: "https://bit.ly/data-canvas",
      target: "_blank",
      etc: "MDataHack I | Jan 2019"
    },
    {
      title: "Mobile Laser Tag",
      text: [
        `Created a 1v1 mobile laser tag game that uses computer vision to 
      track targets.`
      ],
      link: "https://bit.ly/mobile-laser-tag",
      target: "_blank",
      etc: "MHacks XI | Oct 2018"
    },
    {
      title: "A Light in the Darkness",
      src: lightDarkness,
      size: "cover",
      text: [
        `This is a puzzle game where users use different objects such as a reflective mirror or a black hole to try and send the "light" to its destination.`
      ],
      link: "https://globalgamejam.org/2018/games/light-darkness-黑暗中的光芒",
      target: "_blank",
      etc: "Global Game Jam 2018 | Jan 2018"
    },
    {
      title: "Rube Goldberg Machine",
      src: rubeGoldberg,
      size: "cover",
      text: [
        `Show the pollutions that mankind has made to the Earth and ways
      each of us can do to help save the Earth!`
      ],
      link: "https://www.youtube.com/watch?v=6olEt4jDLzM&ab_channel=Technion",
      target: "_blank",
      etc:
        "Technion Earth Day Rube Goldberg Machine Challenge | Feb 2017 - Mar 2017"
    },
    {
      title: "Zoom",
      src: zoom,
      size: "cover",
      text: [
        `This is a 2d scroller where you need to zoom in and out items in order to get the end!`
      ],
      link:
        "https://drive.google.com/file/d/1jfEe3Sl1O3v_1lYeMqjeEIwDBoLH40OV/view?usp=sharing",
      target: "_blank",
      etc: "Fukushima Game Jam 2016 | Aug 2016"
    },
    {
      title: "God of Paper Plane",
      src: godOfPaperPlane,
      size: "cover",
      text: [
        `This is a 2d runner game where you can control the paper airplane to send a love message to your lover!`
      ],
      link:
        "https://drive.google.com/file/d/0Byrk9Q8aBK2peHlxVmNhN0RvVzg/view?usp=sharing",
      target: "_blank",
      etc: "Fukushima Game Jam 2015 | Aug 2015"
    },
    {
      title: "Let Us Out",
      src: letUsOut,
      size: "cover",
      text: [
        `This is a multiplayer puzzle game where each player has to move or trigger items in each stage in order to advance onto the next one!`
      ],
      link: "https://globalgamejam.org/2015/games/let-us-out",
      target: "_blank",
      etc: "Global Game Jam 2015 | Jan 2015"
    }
  ];

  const { setRef } = props;

  function getEtcText(etc) {
    const index = etc.indexOf("|");
    if (index === -1) {
      return etc;
    }
    return (
      <>
        <span className="Experience-card-etc-highlight">
          {etc.substring(0, index)}
        </span>
        {etc.substring(index)}
      </>
    );
  }

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
                <div className="Experience-card-image-div">
                  {card.src ? (
                    <img
                      src={card.src}
                      alt={card.title}
                      className="rounded Experience-card-image"
                    />
                  ) : null}
                </div>
                <div className="Experience-card-content">
                  <h4 className="Experience-card-title">{card.title}</h4>
                  {card.etc ? (
                    <p className="Experience-card-etc">
                      {getEtcText(card.etc)}
                    </p>
                  ) : null}
                  <div className="Experience-card-title-divider" />
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
