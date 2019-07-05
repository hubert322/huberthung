import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import Arrow from "../Arrow/Arrow";
import "animate.css/animate.min.css";
import "./Home.css";

function Home(props) {
  const { setRef, onClick } = props;

  return (
    <div className="Home" ref={ref => setRef("Home", ref)}>
      <div className="Home-gradient-background" />
      <div className="Home-radial-background">
        <div className="Home-content">
          <ScrollAnimation animateIn="Home-type-writer" className="Home-text">
            <h1>Hello World</h1>
            <h1>Hubert Hung</h1>
          </ScrollAnimation>
          <Arrow onClick={onClick} target="About" />
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
