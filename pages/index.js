import Background from "../Components/Background";
import Header from "../Components/Header";
import classes from "../styles/Home.module.scss";
import HomeContainer from "../page_container/HomeContainer";
import AboutMeContainer from "../page_container/AboutMeContainer";
import ContactsContainer from "../page_container/ContactsContainer";
import ProjectsContainer from "../page_container/ProjectsContainer";

function Home() {
  return (
    <>
      <div id={classes.root}>
        <div id={classes.fg}>
          <Header />
          <div id={classes.main}>
            <div id="home" className={classes.componentContainer}>
              <HomeContainer />
            </div>
            <div id="aboutMe" className={classes.componentContainer}>
              <AboutMeContainer />
            </div>
            <div id="projects" className={classes.componentContainer}>
              <ProjectsContainer />
            </div>
            <div id="contacts" className={classes.componentContainer}>
              <ContactsContainer />
            </div>
          </div>
        </div>
        <Background />
      </div>
    </>
  );
}

export default Home;
