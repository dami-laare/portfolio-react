import React from "react";
import classes from "./HomeSections.module.css";

const Projects = () => {
  return (
    <section
      id="work"
      style={{ padding: "0 1rem" }}
      className={`${classes.section} mt-5 fade-in ${classes.work}`}
    >
      <h2 className="">MY WORK</h2>
      <div className="row " style={{ cursor: "default" }}>
        <h3 className="col-12">
          EM HEALTH <i style={{ color: "#000" }} class="fas fa-cogs"></i>
        </h3>
        <h4 className="col-12">BACKEND WEB DEVELOPMENT (PWA)</h4>
      </div>
      <div className="row " style={{ cursor: "default" }}>
        <a
          href="https://exquisite-churros-8cc808.netlify.app/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h3 className="col-12">ODULE O' SUSSANE </h3>
          <h4 className="col-12">FRONTEND WEB DEVELOPMENT</h4>
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">FUNGRY</h3>
        <h4 className="col-12">
          WEB DEVELOPMENT (FULLSTACK) AND MAINTENANCE (WEB APP)
        </h4>
        <a href="https://www.getfungry.com/" target="_blank" rel="noreferrer">
          <div
            style={{
              margin: "0",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <div className={`${classes["work-img-mobile"]} col-12`}>
              <img
                className={`${classes["work-img-inner"]}`}
                src={`${process.env.PUBLIC_URL}/static/images/fungry-01.jpg`}
                alt="Fungry project 1"
              />
            </div>
            <div className={`${classes["work-img-mobile"]} col-12`}>
              <img
                className={`${classes["work-img-inner"]}`}
                src={`${process.env.PUBLIC_URL}/static/images/fungry-02.jpg`}
                alt="Fungry project 2"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">
          ODDIENCE <i style={{ color: "#000" }} class="fas fa-cogs"></i>
        </h3>
        <h4 className="col-12">
          WEB DEVELOPMENT (FULLSTACK) AND MAINTENANCE (WEB APP)
        </h4>
        <a
          href="https://adorable-torte-247a98.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div
            style={{
              margin: "0",
              marginTop: "2rem",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <div className={`${classes["work-img-mobile"]} col-12`}>
              <img
                className={`${classes["work-img-inner"]}`}
                src={`${process.env.PUBLIC_URL}/static/images/oddience-01.jpg`}
                alt="Oddience project 1"
              />
            </div>
            <div className={`${classes["work-img-mobile"]} col-12`}>
              <img
                className={`${classes["work-img-inner"]}`}
                src={`${process.env.PUBLIC_URL}/static/images/oddience-02.jpg`}
                alt="Oddience project 2"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="row ">
        <h3 className="col-12">JOY AIFUOBHOKHAN</h3>
        <h4 className="col-12">WEB DESIGN, DEVELOPMENT AND MANAGEMENT</h4>
        <a
          href="http://joyaifuobhokhan.pythonanywhere.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={`mt-4 ${classes["work-img"]} col-12`}>
            <img
              className={`${classes["work-img-inner"]}`}
              src={`${process.env.PUBLIC_URL}/static/images/jaysite1.png`}
              alt="Joy Aifuobhokhan project 1"
            />
          </div>
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">ASPIRE</h3>
        <h4 className="col-12">WEB DEVELOPMENT</h4>
        <a
          href="https://aspire.dev-nexus.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={`mt-4 ${classes["work-img"]} col-12`}>
            <img
              className={`${classes["work-img-inner"]}`}
              src={`${process.env.PUBLIC_URL}/static/images/aspire1.png`}
              alt="Aspire project 1"
            />
          </div>
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">TRAKK</h3>
        <h4 className="col-12">WEB DEVELOPMENT</h4>
        <a href="https://trakk.dev-nexus.com/" target="_blank" rel="noreferrer">
          <div className={`mt-4 ${classes["work-img"]} col-12`}>
            <img
              className={`${classes["work-img-inner"]}`}
              src={`${process.env.PUBLIC_URL}/static/images/expensetracker2.png`}
              alt="Trakk project 1"
            />
          </div>
        </a>
      </div>

      <p className="text-center" style={{ flexBasis: "100%" }}>
        <i style={{ color: "#000" }} class="fas fa-cogs"></i>{" "}
        <span style={{ fontSize: "0.7rem" }}>= In Development</span>
      </p>
      <p className="text-center" style={{ flexBasis: "100%" }}>
        "PWA"{" "}
        <span style={{ fontSize: "0.7rem" }}>
          = Progressive Web Application
        </span>
      </p>
    </section>
  );
};

export default Projects;
