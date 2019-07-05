import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./Arrow.css";
import PropTypes from "prop-types";

function Arrow(props) {
  const { onClick, target } = props;

  return (
    <div className="Arrow">
      <IconContext.Provider value={{ color: "white", size: "3rem" }}>
        <button type="button" onClick={() => onClick(target)}>
          {target === "Home" ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </IconContext.Provider>
    </div>
  );
}

Arrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired
};

export default Arrow;
