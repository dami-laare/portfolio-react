import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounceIn">
        <Main />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <About />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Skills />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <Projects />
      </AnimationOnScroll>
      <Contact />
    </div>
  );
};

export default Home;
