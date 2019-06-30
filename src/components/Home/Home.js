import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { TiArrowSortedDown } from "react-icons/ti";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./Home.css";

function Home(props) {
  const { setRef, onClick } = props;

  return (
    <div className="Home" ref={ref => setRef("Home", ref)}>
      <div className="Home-gradient-background" />
      <div className="Home-radial-background">
        <div className="Home-content">
          {/* <div id="Home-text-div" className="Home-text-div">
            <ScrollAnimation
              animateIn="Home-type-writer"
              animateOut="fadeOut"
              scrollableParentSelector="#Home-text-div"
            >
              <h1 className="Home-text">Hello World</h1>
            </ScrollAnimation>
          </div> */}
          <ScrollAnimation animateIn="Home-type-writer" className="Home-text">
            <p>Hello World</p>
            <p>Hubert Hung</p>
          </ScrollAnimation>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <button
              className="Home-button"
              type="button"
              onClick={() => onClick("About")}
            >
              <TiArrowSortedDown />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  setRef: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Home;
