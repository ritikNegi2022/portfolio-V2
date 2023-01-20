import classes from "../styles/AboutMeContainer.module.scss";
import SkillsCard from "../Components/SkillsCard";
function AboutMeContainer() {
  return (
    <>
      <div className={classes.aboutMeContainer}>
        <div className={classes.cardHolder}>
          <div className={classes.cards}>
            <span className={classes.title}>Interests and Hobbies</span>
            <span className={classes.subtitle}>
              Coding is the only thing I can do effectively. I am a self-taught
              web developer as well. All of the free resources on the internet
              are where I study. If I'm not coding, odds are that I'm either
              learning a new skill or amusing myself online with a wide range of
              things like playing video games, mindlessly browsing the internet,
              or looking through Instagram memes.
            </span>
          </div>
        </div>
        <div className={classes.cardHolder}>
          <div className={classes.cards}>
            <span className={classes.title}>Future Goals</span>
            <span className={classes.subtitle}>
              <ul>
                <li>To upgrade my web development capabilities.</li>
                <li>Desire to learn how to use a linux system.</li>
                <li>
                  Furthermore to get new skills to polish my web development
                  work, such as photoshop and others.
                </li>
                <li>Still updating my list</li>
              </ul>
            </span>
          </div>
        </div>
        <div className={classes.cardHolder}>
          <div className={classes.cards}>
            <span className={classes.title}>Skills</span>
            <span className={classes.subtitle}>
              <SkillsCard />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeContainer;
