import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Arrow from "../Arrow/Arrow";
import "./App.css";

function App() {
  const refs = {};

  function setRef(key, value) {
    refs[key] = value;
  }

  function scrollToRef(key) {
    if (key in refs) {
      // NavBar height = 10vh
      let headerOffset = window.innerHeight * 0.1;
      let bodyPosition = document.body.getBoundingClientRect().top;
      let elementPosition = refs[key].getBoundingClientRect().top;
      let offset = elementPosition - bodyPosition - headerOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center App">
      <Home setRef={setRef} onClick={scrollToRef} />
      <NavBar onClick={scrollToRef} />
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