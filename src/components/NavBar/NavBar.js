import React from "react";
import "./NavBar.css";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <header className="NavBar">
      <div className="NavBar-content">
        <NavButtonList {...props} />
      </div>
      <div className="NavBar-bottom-line" />
    </header>
  );
}

function NavButtonList(props) {
  const { onClick } = props;
  const navList = ["About", "Experience", "Contact", "Resume"];

  return (
    <>
      <button
        className="NavBar-button NavBar-home"
        type="button"
        onClick={() => onClick("Home")}
      >
        Home
      </button>
      {navList.map(navItem => (
        <button
          key={navItem}
          className="NavBar-button"
          type="button"
          onClick={() => onClick(navItem)}
        >
          {navItem}
        </button>
      ))}
    </>
  );
}

NavButtonList.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavBar;
