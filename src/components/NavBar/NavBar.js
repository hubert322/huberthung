import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { IoIosMenu, IoMdHome } from "react-icons/io";
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
  const [currWidth, setCurrWidth] = useState(window.innerWidth);

  const mediumDeviceMinWidth = 768;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrWidth(window.innerWidth);
    });
  });

  if (currWidth < mediumDeviceMinWidth) {
    return (
      <>
        <IconContext.Provider value={{ className: "NavBar-button" }}>
          <button type="button" onClick={() => onClick("Home")}>
            <IoIosMenu />
          </button>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "NavBar-button" }}>
          <button type="button" onClick={() => onClick("Home")}>
            <IoMdHome />
          </button>
        </IconContext.Provider>
      </>
    );
  }

  return (
    <>
      <button
        className="NavBar-button NavBar-button-home"
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
