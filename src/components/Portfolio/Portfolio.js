/* eslint-disable react/no-array-index-key */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import apt from "../../assets/images/apt.png";
import drowningInLove from "../../assets/images/drowning-in-love.png";
import itsAllFake from "../../assets/images/its-all-fake.png";
import pictionary from "../../assets/images/pictionary.png";
import lazLogo from "../../assets/images/laz.png";
import openMic from "../../assets/images/open-mic.jpg";
import "../../assets/styles/section.css";
import "./Portfolio.css";

function Portfolio(props) {
  const subCards = [
    {
      title: "It's All Fake",
      text: [
        `The song is about the complex romantic relationships I have had as a young adult living in New York City`,
        `The key change from F major in the verse to D minor in the chorus reflects the ups and downs of these relationships`,
        `The intensity of the song heightens as the song progresses and reaches its climax at the guitar solo, reflecting the progression of tension and release in the relationship`,
        `Every single element of the song was created by me except the final mastering`,
        `The album cover is also created entirely by me except the samples of the paper textures`, 
      ],
      src: itsAllFake,
      links: [
        {
          link: "https://open.spotify.com/album/6ZueioREbzuwFdlAhEqs4I",
          text: "Listen"
        }
      ],
      etc: "Original Music"
    },
    {
      title: "Drowning in Love 醉入愛河",
      text: [
        `This song is about falling in love with someone, with a hidden meaning of being intimate with them as the night and drinks progress`,
        `The song title and the lyrics of the verse are a play on words of the Chinese phrase 墜入愛河, meaning falling in love, with the first character been replaced as 醉 (drunk) to reflect the drinking situation`,
        `The call and response of the saxophone and guitar during the chorus reflects the interactions between the two lovers`,
        `The static sound in the background of the guitar solo combined with the organ sound effect put onto the guitar create a vintage vibe that calls for the passing of time while the lovers enjoy themselves`,
        `The key of the song is in Eb Mixolydian with some blues notes`,
        `Every single element of the song was created by me except the final mastering`,
        `The album cover is also created entirely by me except the sample of the red lips`,
      ],
      src: drowningInLove,
      links: [
        {
          link: "https://open.spotify.com/album/12FQ2gdjHptFpzU9qGJjtR",
          text: "Listen"
        }
      ],
      etc: "Original Music"
    },
    {
      title: "Open Mic Session",
      src: openMic,
      text: [
        `Open Mic session at Brooklyn Music Kitchen where I performed my singles "It's All Fake" and "Drowning in Love 醉入愛河"`,
        `Utilized Ableton's automation to dynamically switch guitar tones throughout the performance`,
        `Equipments used: Mac Book Pro to run Ableton, Neural DSP for the guitar tones, and Focusrite Scarlett as the audio interface`,
      ],
      links: [
        {
          link: "https://photos.app.goo.gl/M8SjezbrG4vj61NR9",
          text: "View Video"
        }
      ],
      etc: "Brooklyn Music Kitchen | Brooklyn, NY | Dec 2024"
    },
    {
        title: "APT with Original Guitar Solo",
        src: apt,
        text: [
            `A cover of the song "APT" by Rosé and Bruno Mars with an original guitar solo`,
        ],
        links: [
            {
            link: "https://www.instagram.com/reel/DB0IOMgxxZ3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            text: "View Video"
            }
        ],
        etc: "Nov 2024"
    },
    {
        title: "Pictionary Live",
        text: [
            `An online, multiplayer version of pictionary developed that allows synchronous events such as joining room, drawing, and messaging to happen simultaneously across connected clients!`,
            `Technologies Invovled: Javascript, React, Python, Flask, MongoDB, Socket.io, Heroku`,
        ],
        src: pictionary,
        size: "100% 100%",
        links: [
            {
            link: "https://github.com/hubert322/pictionary",
            text: "GitHub + Demo"
            },
        ],
        etc: "Personal Project | May 2020 - Jul 2020"
    },
    {
      title: "Reward Card System",
      src: lazLogo,
      text: [
        `Designed and implemented web and mobile UI interfaces for generating and redeeming QR codes for teachers and students`,
        `Technologies Invovled: Javascript, AngularJs, PHP, MySQL, Nginx, Swift, Java`
      ],
      links: [
        {
          link: "https://docs.google.com/document/d/1D333-sonmTmylu1DoKKvFmFJSLUjeIRw/edit?usp=sharing&ouid=117033902035376364501&rtpof=true&sd=true",
          text: "Design Doc"
        },
        {
            link: "https://github.com/hubert322/reward-card-system",
            text: "GitHub for Web Version"
        },
        {
            link: "https://github.com/hubert322/reward-card-system-mobile",
            text: "GitHub for Mobile Version"
        },
        {
            link: "https://docs.google.com/presentation/d/1nl1h-xOp_wgAiI6qmHZkC3jSpwuXcf6I/edit#slide=id.p6",
            text: "Demo"
        }
      ],
      etc: "Internship | Ann Arbor, MI | May 2019 - Aug 2019"
    },
  ];

  const { setRef } = props;

  function getEtcText(etc) {
    const index = etc.indexOf("|");
    if (index === -1) {
      return etc;
    }
    return (
      <>
        <span className="Portfolio-card-etc-highlight">
          {etc.substring(0, index)}
        </span>
        {etc.substring(index)}
      </>
    );
  }

  return (
    <>
      <div ref={ref => setRef("Portfolio", ref)} />
      <ScrollAnimation
        className="section-container Portfolio-container"
        animateIn="fadeIn"
      >
        <h2 className="section-title">Portfolio</h2>
        <div className="section-content Portfolio-content">
          {subCards.map((card, i) => (
            <Fragment key={`fragment-${i}`}>
              <div key={card.title} className="Portfolio-card">
                <div className="Portfolio-card-image-div">
                  {card.src ? (
                    <img
                      src={card.src}
                      alt={card.title}
                      className="rounded Portfolio-card-image"
                    />
                  ) : null}
                </div>
                <div className="Portfolio-card-content">
                  <h4 className="Portfolio-card-title">{card.title}</h4>
                  {card.etc ? (
                    <p className="Portfolio-card-etc">
                      {getEtcText(card.etc)}
                    </p>
                  ) : null}
                  <div className="Portfolio-card-title-divider" />
                  {card.text.map(text => {
                    const keyword = "Technologies Invovled:";
                    const keywordIndex = text.indexOf(keyword);
                    if (keywordIndex != -1) {
                      const beforeKeywordText = text.substr(0, keywordIndex);
                      const keywordText = text.substr(
                        keywordIndex,
                        keyword.length
                      );
                      const afterKeywordText = text.substr(
                        keywordIndex + keyword.length
                      );
                      return (
                        <p key={text} className="Portfolio-card-text">
                          {beforeKeywordText}
                          <span className="Portfolio-card-keyword">
                            {keywordText}
                          </span>
                          {afterKeywordText}
                        </p>
                      );
                    } else {
                      return (
                        <p key={text} className="Portfolio-card-text">
                          {text}
                        </p>
                      );
                    }
                  })}
                  <div>
                    {card.links.map(link => (
                      <a
                        key={link.link}
                        className="Portfolio-link-button"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {i + 1 !== subCards.length ? (
                <div key={`divider${i}`} className="Portfolio-card-divider" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </ScrollAnimation>
    </>
  );
}

Portfolio.propTypes = {
  setRef: PropTypes.func.isRequired
};

export default Portfolio;
