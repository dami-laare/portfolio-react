import React from "react";
import classes from "./HomeSections.module.css";

const Projects = () => {
  return (
    <section id='work' style={{padding: '0 1rem'}} className={`${classes.section} mt-5 fade-in ${classes.work}`}>
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
          style={{textDecoration: 'none', color: 'black'}}
        >
          <h3 className="col-12">
            ODULE O' SUSSANE{" "}
          </h3>
          <h4 className="col-12">FRONTEND WEB DEVELOPMENT</h4>
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">FUNGRY</h3>
        <h4 className="col-12">
          WEB DEVELOPMENT (FULLSTACK) AND MAINTENANCE (WEB APP)
        </h4>
        <a
          href="https://www.getfungry.com/"
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
            <img
              style={{ margin: "0", height: "60vw", width: 'auto' }}
              className={`${classes["work-img"]} col-12`}
              src={`${process.env.PUBLIC_URL}/static/images/fungry-01.jpg`}
            />
            <img
              style={{ margin: "0", height: "60vw", width: 'auto' }}
              className={`${classes["work-img"]} col-12`}
              src={`${process.env.PUBLIC_URL}/static/images/fungry-02.jpg`}
            />
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
          href="https://stellular-mandazi-a2b5b2.netlify.app/"
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
            <img
              style={{ margin: "0", height: "60vw", width: 'auto' }}
              className={`${classes["work-img"]} col-12`}
              src={`${process.env.PUBLIC_URL}/static/images/oddience-01.jpg`}
            />
            <img
              style={{ margin: "0", height: "60vw", width: 'auto' }}
              className={`${classes["work-img"]} col-12`}
              src={`${process.env.PUBLIC_URL}/static/images/oddience-02.jpg`}
            />
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
          <img
            className={`mt-4 ${classes["work-img"]} col-12`}
            src={`${process.env.PUBLIC_URL}/static/images/jaysite1.png`}
          />
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">ASPIRE</h3>
        <h4 className="col-12">WEB DEVELOPMENT</h4>
        <a
          href="https://priceless-bartik-335d29.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={`mt-4 ${classes["work-img"]} col-12`}
            src={`${process.env.PUBLIC_URL}/static/images/aspire1.png`}
          />
        </a>
      </div>
      <div className="row ">
        <h3 className="col-12">TRAKK</h3>
        <h4 className="col-12">WEB DEVELOPMENT</h4>
        <a
          href="https://compassionate-nobel-bd9769.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={`mt-4 ${classes["work-img"]} col-12`}
            src={`${process.env.PUBLIC_URL}/static/images/expensetracker2.png`}
          />
        </a>
      </div>

      <p className='text-center'>
        <i style={{ color: "#000" }} class="fas fa-cogs"></i>{" "}
        <span style={{ fontSize: "0.7rem" }}>= In Development</span>
      </p>
      <p className='text-center'>
        "PWA"{" "}
        <span style={{ fontSize: "0.7rem" }}>= Progressive Web Application</span>
      </p>
    </section>
  );
};

export default Projects;
