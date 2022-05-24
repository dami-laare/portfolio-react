import React from "react";
import classes from './HomeSections.module.css'

const Skills = () => {
  const skills = [
    {icon: "html5", desc: 'HTML 5'},
    {icon: "css3-alt", desc: 'CSS 3'},
    {icon: "js-square", desc: 'JAVASCRIPT'},
    {icon: "react", desc: 'REACT JS'},
    {icon: "node", desc: 'NODE JS'},
    {icon: "bootstrap", desc: 'BOOTSTRAP 5'},
    {icon: "google", desc: 'GOOGLE TAG MANAGER'},
    {icon: "sass", desc: 'SASS'},
    {icon: "python", desc: 'PYTHON'},
  ];
  return (
    <section className={`${classes.section} mt-5 fade-in`} id="skills">
      <h2>SKILLS</h2>
      <div className="row mt-1 px-5">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="col-6 col-sm-4 col-lg-3 mt-5">
              <i className={`${classes['skill-icon']} fab fa-${skill.icon}`}></i>
              <p style={{fontSize: '0.8rem'}} className='text-center mt-2 p-0'>{skill.desc}</p>
            </div>
          );
        })}

        {/* <div className="col-12 mt-5">
          <a
            href="about.html"
            style="padding: 0; text-align: center; font-weight: 600; text-decoration: underline; color: inherit;"
          >
            MORE DETAILS
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
