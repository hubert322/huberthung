import React from "react";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import "./App.css";

function App() {
  const refs = {};

  function setRef(key, value) {
    refs[key] = value;
  }

  function scrollToRef(key) {
    if (key in refs) {
      refs[key].scrollIntoView({
        behavior: "smooth",
        block: "end"
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
