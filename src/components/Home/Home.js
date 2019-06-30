import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { TiArrowSortedDown } from "react-icons/ti";
import "./Home.css";

function Home(props) {
  const { onClick } = props;

  return (
    <div className="Home">
      <div className="Home-gradient-background" />
      <div className="Home-radial-background">
        <div className="Home-content">
          <p className="Home-type-writer">Hello World!</p>
          <p className="Home-type-writer">Hubert Hung</p>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <button className="Home-button" type="button" onClick={onClick}>
              <TiArrowSortedDown />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Home;
