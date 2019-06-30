import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import "./App.css";

function App() {
  const [aboutRef, setAboutRef] = React.useState(React.createRef());

  function scrollToRef() {
    aboutRef.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
    console.log("Hello");
  }

  return (
    <div className="App">
      <Home onClick={scrollToRef} />
      <NavBar />
      <About setRef={setAboutRef} />
    </div>
  );
}

export default App;
