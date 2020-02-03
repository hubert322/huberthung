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
  const navList = ["About", "Experience", "Contact"];
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const [clickedDropdown, setClickDropdown] = useState(false);

  const mediumDeviceMinWidth = 768;

  function changeDropdown() {
    setClickDropdown(!clickedDropdown);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrWidth(window.innerWidth);
    });
  });

  // if (currWidth < mediumDeviceMinWidth) {
  //   return (
  //     <>
  //       <div className="NavBar-dropdown">
  //         <IconContext.Provider value={{ className: "NavBar-button" }}>
  //           <button type="button" onClick={changeDropdown}>
  //             <IoIosMenu />
  //           </button>
  //         </IconContext.Provider>
  //         {clickedDropdown ? (
  //           <div className="NavBar-dropdown-content">LMZD</div>
  //         ) : null}
  //       </div>
  //       <IconContext.Provider value={{ className: "NavBar-button" }}>
  //         <button type="button" onClick={() => onClick("Home")}>
  //           <IoMdHome />
  //         </button>
  //       </IconContext.Provider>
  //     </>
  //   );
  // }

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
      <a
        className="NavBar-button NavBar-button-resume"
        href="https://bit.ly/hubert-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </>
  );
}

NavButtonList.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavBar;
