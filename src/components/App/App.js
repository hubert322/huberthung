import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import "./App.css";
import Experience from "../Experience/Experience";

function App() {
  const refs = {};

  function setRef(key, value) {
    refs[key] = value;
  }

  function scrollToRef(key) {
    if (key in refs) {
      refs[key].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  return (
    <div className="App">
      <Home setRef={setRef} onClick={scrollToRef} />
      <NavBar onClick={scrollToRef} />
      <About setRef={setRef} />
      <Experience setRef={setRef} />
    </div>
  );
}

export default App;
