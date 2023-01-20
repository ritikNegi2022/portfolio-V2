import { useEffect } from 'react';
import classes from './SkillsCard.module.scss'

function SkillsCard() {
  return (
    <>
      <div className={classes.cardContainer}>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>HTML</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.html}></span>
          </div>
        </div>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>CSS</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.css}></span>
          </div>
        </div>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>JavaScript</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.javascript}></span>
          </div>
        </div>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>React-Js</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.reactJs}></span>
          </div>
        </div>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>Next-Js</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.nextJs}></span>
          </div>
        </div>
        <div className={classes.bar}>
          <div className={classes.info}>
            <span>Python</span>
          </div>
          <div className={classes.progressLine}>
            <span className="barAnimation" id={classes.python}></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsCard