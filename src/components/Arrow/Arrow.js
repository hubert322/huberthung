import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import "./Arrow.css";
import PropTypes from "prop-types";

function Arrow(props) {
  const { onClick } = props;

  return (
    <header className="Arrow">
      <div className="Arrow-content">
        <IconContext.Provider value={{ color: "white", size: "4em" }}>
          <button
            className="Arrow-button"
            type="button"
            onClick={() => onClick("Experience")}
          >
            <IoIosArrowDown />
          </button>
        </IconContext.Provider>
      </div>
    </header>
  );
}

Arrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Arrow;
