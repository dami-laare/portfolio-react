import React from "react";
import classes from "./HomeSections.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact} mt-5 mx-5`}>
      <h2>Connect</h2>
      <div className="row mb-3">
        <a
          className="col-3 col-sm-2 col-lg-1 mt-4"
          href="https://twitter.com/dami_laare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="col-3 col-sm-2 col-lg-1 mt-4"
          href="https://www.linkedin.com/in/temitayo-osunkiyesi-0b7600147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="col-3 col-sm-2 col-lg-1 mt-4"
          href="https://github.com/dami-laare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
