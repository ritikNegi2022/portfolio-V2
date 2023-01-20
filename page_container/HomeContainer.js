import React from 'react'
import classes from '../styles/HomeContainer.module.scss'
function HomeContainer() {
  return (
    <>
      <div className={classes.homeContainer}>
        <h1>{"Hello, I am Ritik ;)"}</h1>
        <h3>
          I am a self-taught front end developer, which
          basically means that I design, style, and add functionality to
          websites.
        </h3>
      </div>
    </>
  );
}

export default HomeContainer