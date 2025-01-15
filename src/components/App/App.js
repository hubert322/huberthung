import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Experience from "../Experience-new/Experience";
import Contact from "../Contact/Contact";
import Arrow from "../Arrow/Arrow";
import Portfolio from "../Portfolio/Portfolio";
import "./App.css";

function App() {
  const refs = {};
  const [currWidth, setCurrWidth] = useState(window.innerWidth);
  const mediumDeviceMinWidth = 768;
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrWidth(window.innerWidth);
    });
  });

  function setRef(key, value) {
    refs[key] = value;
  }

  function scrollToRef(key) {
    if (key in refs) {
      // NavBar height = 10vh if medium device else 7vh
      // so scalar would be 0.1 or 0.07
      let scalar = currWidth >= mediumDeviceMinWidth ? 0.1 : 0.07;
      let headerOffset = window.innerHeight * scalar;
      let bodyPosition = document.body.getBoundingClientRect().top;
      let elementPosition = refs[key].getBoundingClientRect().top;
      let offset = elementPosition - bodyPosition - headerOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }

  if (location.pathname === "/portfolio") {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center App">
        <Home setRef={setRef} onClick={scrollToRef} arrowTarget="Portfolio" />
        <NavBar onClick={scrollToRef} navList={["Portfolio"]} />
        <Portfolio setRef={setRef} />
        <Arrow onClick={scrollToRef} target="Contact" />
      <Contact setRef={setRef} />
      <Arrow onClick={scrollToRef} target="Home" />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center App">
      <Home setRef={setRef} onClick={scrollToRef} arrowTarget="About" />
      <NavBar onClick={scrollToRef} navList={["About", "Experience", "Contact"]} />
      <About setRef={setRef} />
      <Arrow onClick={scrollToRef} target="Experience" />
      <Experience setRef={setRef} />
      <Arrow onClick={scrollToRef} target="Contact" />
      <Contact setRef={setRef} />
      <Arrow onClick={scrollToRef} target="Home" />
    </div>
  );
}

export default App;
