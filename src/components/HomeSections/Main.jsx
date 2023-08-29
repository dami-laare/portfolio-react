import React from 'react';
import classes from './HomeSections.module.css'

const Main = () => {
  return (
    <section id="main-intro"  className={`${classes.main}`}>
        <img className="mt-5 mt-lg-0" src={`${process.env.PUBLIC_URL}/static/images/arPic.png`} alt="My AR Profile" />
        <div id="intro-content" className={`${classes['intro-content']} px-1 me-0 mt-3`}>
            <h1 className="display-1">TEMITAYO OSUNKIYESI</h1>
            <h4>SOFTWARE ENGINEER | MEDICAL DOCTOR | GAMER | ALL ROUND AWESOME DUDE</h4>
        </div>
    </section>
  )
}

export default Main