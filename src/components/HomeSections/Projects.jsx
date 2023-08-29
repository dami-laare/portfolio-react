import React from "react";
import classes from "./HomeSections.module.css";
import sourcemygadgets from "../../static/images/smg.jpg";
import savetobuy from "../../static/images/svtb.jpg";
import oddience from "../../static/images/oddience_app.jpg";
import copystack from "../../static/images/copystack.jpg";
import sussane from "../../static/images/susanne.jpg";
import joy from "../../static/images/joy.jpg";

const Projects = () => {
  return (
    <section
      id="work"
      style={{ padding: "0 1rem" }}
      className={`${classes.section} mt-5 fade-in ${classes.work}`}
    >
      <h2>MY WORK</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div>
          {/* <h4 className="col-12">WEB DESIGN, DEVELOPMENT AND MANAGEMENT</h4> */}
          <a
            href="https://sourcemygadgets.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={sourcemygadgets}
                alt="sourcemygadgets"
              />
            </div>
          </a>
          <h3 className="col-12">SOURCEMYGAGDETS</h3>
        </div>
        <div>
          {/* <h4 className="col-12">WEB DESIGN, DEVELOPMENT AND MANAGEMENT</h4> */}
          <a href="https://app.savetobuy.io/" target="_blank" rel="noreferrer">
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={savetobuy}
                alt="savetobuy"
              />
            </div>
          </a>
          <h3 className="col-12">SAVETOBUY</h3>
        </div>
        <div>
          <a
            href="https://beta.oddience.co/login"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={oddience}
                alt="oddience_app"
              />
            </div>
          </a>
          <h3 className="col-12">ODDIENCE</h3>
        </div>
        <div>
          <a
            href="https://gilded-begonia-9b9bea.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={copystack}
                alt="copystack"
              />
            </div>
          </a>
          <h3 className="col-12">COPYSTACK WEBSITE</h3>
        </div>
        <div>
          <a
            href="https://exquisite-churros-8cc808.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={sussane}
                alt="odule_sussane"
              />
            </div>
          </a>
          <h3 className="col-12">ODULE O' SUSSANE</h3>
        </div>
        <div>
          {/* <h4 className="col-12">WEB DESIGN, DEVELOPMENT AND MANAGEMENT</h4> */}
          <a
            href="http://joyaifuobhokhan.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              style={{
                margin: "0",
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                className={`${classes["work-img-inner"]}`}
                src={joy}
                alt="joy_aifuobhokhan"
              />
            </div>
          </a>
          <h3 className="col-12">JOY AIFUOBHOKHAN</h3>
        </div>
      </div>

      {/* <p className="text-center" style={{ flexBasis: "100%" }}>
        <i style={{ color: "#000" }} class="fas fa-cogs"></i>{" "}
        <span style={{ fontSize: "0.7rem" }}>= In Development</span>
      </p>
      <p className="text-center" style={{ flexBasis: "100%" }}>
        "PWA"{" "}
        <span style={{ fontSize: "0.7rem" }}>
          = Progressive Web Application
        </span>
      </p> */}
    </section>
  );
};

export default Projects;
