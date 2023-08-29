import React from "react";
// import { Link } from "react-router-dom";
import classes from "./HomeSections.module.css";

const About = () => {
  return (
    <section
      className={`${classes.section} ${classes.about} mt-3 mt-md-3 mt-lg-5 fade-in`}
    >
      <h2>ABOUT</h2>
      <p className="mt-2">
        Hey there👋! I'm a software engineer who's all about
        creating awesome digital experiences. With my expertise in both
        front-end and back-end development, I can build robust and user-friendly
        applications! From crafting sleek interfaces to optimizing
        server performance, I've got you covered. Let's collaborate and make
        some coding magic happen! 🚀💻
      </p>
      {/* <Link to="/about" style={{ fontWeight: "600", color: "black" }}>
        MORE...
      </Link> */}
    </section>
  );
};

export default About;
