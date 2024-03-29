import React from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
