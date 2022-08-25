import React, { useState, useEffect } from "react";
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
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import classes from "./HomeSections.module.css";

const skills = [
  {
    icon: <FaJsSquare className={`${classes["skill-icon"]}`} />,
    desc: "JAVASCRIPT",
  },
  {
    icon: <SiTypescript className={`${classes["skill-icon-sm"]}`} />,
    desc: "TYPESCRIPT",
  },
  {
    icon: <FaReact className={`${classes["skill-icon"]}`} />,
    desc: "REACT JS",
  },
  {
    icon: <FaNode className={`${classes["skill-icon"]}`} />,
    desc: "NODE JS",
  },
  {
    icon: <FaHtml5 className={`${classes["skill-icon"]}`} />,
    desc: "HTML 5",
  },
  {
    icon: <FaCss3Alt className={`${classes["skill-icon"]}`} />,
    desc: "CSS 3",
  },
  {
    icon: <SiTailwindcss className={`${classes["skill-icon"]}`} />,
    desc: "TAILWIND CSS",
  },
  {
    icon: <FaBootstrap className={`${classes["skill-icon"]}`} />,
    desc: "BOOTSTRAP 5",
  },
  {
    icon: <FaGoogle className={`${classes["skill-icon-sm"]}`} />,
    desc: "GOOGLE TAG MANAGER",
  },
  {
    icon: <FaSass className={`${classes["skill-icon"]}`} />,
    desc: "SASS",
  },
  {
    icon: (
      <FaPython
        className={`${classes["skill-icon"]}`}
        style={{ display: "inline" }}
      />
    ),
    desc: "PYTHON",
  },
];

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeSkills, setActiveSkills] = useState(skills.slice(0, 4));

  useEffect(() => {
    setActiveSkills(skills.slice(0, showAllSkills ? skills.length : 4));
  }, [showAllSkills]);

  return (
    <section className={`${classes.section} mt-5 fade-in`} id="skills">
      <h2>SKILLS</h2>
      <div
        className="row mt-1 px-5"
        style={{
          width: "100%",
        }}
      >
        {activeSkills.map((skill, i) => {
          return (
            <div key={i} className="col-6 col-sm-4 col-lg-3 mt-5">
              {skill.icon}
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
      <button
        style={{
          textDecoration: "underline",
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
        }}
        onClick={() => setShowAllSkills((prevVal) => !prevVal)}
      >
        {showAllSkills ? "LESS" : "MORE"}
      </button>
    </section>
  );
};

export default Skills;
