import React from 'react'
import { Link } from 'react-router-dom'
import classes from './HomeSections.module.css'

const About = () => {
  return (
    <section className={`${classes.section} mt-3 mt-md-3 mt-lg-5 fade-in`} id="about">
        <h2>ABOUT</h2>
        <p className="mt-5">
            For about a year I have studied and inscribed the sacred runes and performed the ancient rituals that govern the web 
            <br /><br />
            The web although quite similar to the arcane has become my home and I have learnt how to navigate its complexities  
        </p>
        <Link to="/about" style={{fontWeight: '600', color: "black"}}>MORE...</Link>
    </section>
  )
}

export default About