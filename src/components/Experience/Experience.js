import React, { useState } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import trendMicro from "../../assets/images/trend-micro.png";
import pictionary from "../../assets/images/pictionary.png";
import lazLogo from "../../assets/images/laz.png";
import engageMe from "../../assets/images/engage-me.png";
import pwa from "../../assets/images/pwa.png";
import laserTag from "../../assets/images/laser-tag.png";
import canvas from "../../assets/images/canvas.png";
import lightDarkness from "../../assets/images/light-darkness.png";
import rubeGoldberg from "../../assets/images/rube-goldberg.png";
import "../../assets/styles/section.css";
import "./Experience.css";

function Experience(props) {
  const subCards = [
    {
      title: "UI BVT Automation",
      ribbon: "Internship",
      text: `Implemented a pipeline that set Windows computers as nodes to transfer files back to Ansible server via Ansible, broadening automated testing’s capabilities into controlling Windows.
      Designed a new BVT UI test case for deny list/allow list interface, from mindmap, to test case review, to implementation via WebdriverIO to automate UI testing and tcpreplay for package detection, resulting in finding 4 P3 bugs 2 weeks prior to release.
      `,
      src: trendMicro
    },
    {
      title: "License Plate Detection Management/Control System",
      ribbon: "Internship",
      text: `Developing a management/control system for the license plate 
      detection system used in the office’s building parking lot to allow admins
      to specify various access controls for different groups`
    },
    {
      title: "Pictionary Live",
      ribbon: "Personal",
      text: `An online, multiplayer version of pictionary!`,
      src: pictionary,
      size: "100% 100%",
      link: "https://pictionary.live",
      target: "_blank"
    },
    {
      title: "Reward Card System",
      ribbon: "Internship",
      text: `Implemented a new feature that allows teachers to generate reward
      cards and students to redeem them through QR codes to increase student
      and teacher interaction with our products even offline.`,
      src: lazLogo,
      link: "https://laz.huberthung.me",
      target: "_blank"
    },
    {
      title: "EngageMe",
      src: engageMe,
      ribbon: "MHacks XII",
      text: `A Chrome extension that displays the most popular segments of 
      videos by tracking users’ video-watching activity through crowdsourcing`,
      link: "https://github.com/rguan72/EngageMe-be",
      target: "_blank"
    },
    {
      title: "PWA Example",
      src: pwa,
      text: `Progressive Web App Demo!`,
      link: "https://github.com/hubert322/pwa-example",
      target: "_blank"
    },
    {
      title: "Blast Beat",
      src: null,
      text: `Generate music from text files!!!`,
      link: "https://github.com/bowman3002/BlastBeatPy",
      target: "_blank"
    },
    {
      title: "Data Analysis on Canvas",
      src: canvas,
      ribbon: "MDataHack I",
      text: `Analyzed 300000+ lines of data to identify trends in course 
      completion rate.`,
      link: "https://bit.ly/data-canvas",
      target: "_blank"
    },
    {
      title: "Mobile Laser Tag",
      src: laserTag,
      ribbon: "MHacks XI",
      text: `Created a 1v1 mobile laser tag game that uses computer vision to 
      track targets.`,
      link: "https://bit.ly/mobile-laser-tag",
      target: "_blank"
    },
    {
      title: "A Light in the Darkness",
      src: lightDarkness,
      ribbon: "GGJ 2018",
      size: "cover",
      text: `This is a puzzle game where users use different objects to try to
      send the "light" to its destination.`,
      link: "https://globalgamejam.org/2018/games/light-darkness-黑暗中的光芒",
      target: "_blank"
    },
    {
      title: "Rube Goldberg Machine",
      src: rubeGoldberg,
      size: "cover",
      text: `Show the pollutions that mankind has made to the Earth and ways
      each of us can do to help save the Earth!`,
      link: "./rubeGoldberg",
      target: "_self"
    }
  ];

  const { setRef } = props;
  const [overlay, setOverlay] = useState(null);

  function showOverlay(event) {
    const contentIndex = 0;
    let childNodes = event.currentTarget.childNodes[contentIndex].childNodes;
    for (const node of childNodes) {
      if (node.className === "Experience-card-title") {
        setOverlay(node.innerText);
        return;
      }
    }
  }

  function hideOverlay() {
    setOverlay(null);
  }

  return (
    <>
      <div ref={ref => setRef("Experience", ref)} />
      <ScrollAnimation
        className="section-container Experience-container"
        animateIn="fadeIn"
      >
        <h2 className="section-title">Experience</h2>
        <div className="section-content">
          <div className="Experience-sub-div">
            {subCards.map(card => (
              <div
                key={card.title}
                className="Experience-sub-card"
                onMouseEnter={showOverlay}
                onMouseLeave={hideOverlay}
              >
                <div
                  className="Experience-sub-card-content"
                  style={{
                    backgroundImage: `url(${card.src})`,
                    backgroundPosition: card.pos ? card.pos : "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: card.size ? card.size : "contain"
                  }}
                >
                  {card.ribbon ? (
                    <div className="Experience-ribbon">{card.ribbon}</div>
                  ) : null}

                  {overlay === card.title ? (
                    <div className="Experience-overlay">
                      <h4 className="Experience-card-title">{card.title}</h4>
                      <p className="Experience-card-title">{card.text}</p>
                      {card.link ? (
                        <a
                          className="Experience-overlay-button"
                          href={card.link}
                          target={card.target}
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                      ) : null}
                    </div>
                  ) : (
                    <h4
                      className="Experience-card-title"
                      style={{ backgroundColor: "rgba(43, 83, 129, 0.5)" }}
                    >
                      {card.title}
                    </h4>
                  )}
                </div>
              </div>
            ))}
            <div className="Experience-empty" />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

Experience.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Experience;
