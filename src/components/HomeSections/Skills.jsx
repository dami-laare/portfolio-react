import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaBootstrap,
  FaGoogle,
  FaSass,
  FaPython,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import classes from "./HomeSections.module.css";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 style={{ display: "inline" }} />, desc: "HTML 5" },
    { icon: <FaCss3Alt style={{ display: "inline" }} />, desc: "CSS 3" },
    { icon: <FaJsSquare style={{ display: "inline" }} />, desc: "JAVASCRIPT" },
    {
      icon: <SiTypescript style={{ display: "inline" }} />,
      desc: "TYPESCRIPT",
    },
    { icon: <FaReact style={{ display: "inline" }} />, desc: "REACT JS" },
    { icon: <FaNode style={{ display: "inline" }} />, desc: "NODE JS" },
    {
      icon: <FaBootstrap style={{ display: "inline" }} />,
      desc: "BOOTSTRAP 5",
    },
    {
      icon: <FaGoogle style={{ display: "inline" }} />,
      desc: "GOOGLE TAG MANAGER",
    },
    { icon: <FaSass style={{ display: "inline" }} />, desc: "SASS" },
    { icon: <FaPython style={{ display: "inline" }} />, desc: "PYTHON" },
  ];
  return (
    <section className={`${classes.section} mt-5 fade-in`} id="skills">
      <h2>SKILLS</h2>
      <div className="row mt-1 px-5">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="col-6 col-sm-4 col-lg-3 mt-5">
              <i
                className={`${classes["skill-icon"]} fab fa-${skill.icon}`}
              ></i>
              <p
                style={{ fontSize: "0.8rem" }}
                className="text-center mt-2 p-0"
              >
                {skill.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
