import classes from "../styles/ProjectsContainer.module.scss";
import Images from "../ImageProvider/Images";
function ProjectsContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.noticeHolder}>
        <div className={classes.notice}>
          <h3 className={classes.title}>Important Note</h3>
          <p className={classes.noticePara}>
            My concern for aesthetics was decreased because I developed several
            of the projects merely to investigate the functionality of the
            languages, frameworks or modules I used to develop them. They don't
            respond to either smaller or larger screens in large numbers.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.timer}
              alt="Timer App"
            />
            <h3 className={classes.title}>Timer</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/timer/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/timer"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.javascript} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.note}>
              The project does not adjust for screen size.
            </span>
            As a novice, I simply used vanilla javascript, html5, and css3 to
            develop this project. Javascript is used to operate this easy timer.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.secretMessaging}
              alt="Secret Messenger"
            />
            <h3 className={classes.title}>Secret Messenger</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/secret-messaging/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/secret-messaging"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.javascript} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.note}>
              The project does not adjust for screen size.
            </span>
            I utilised plain vanilla javascript, html5, and css3 as an
            intermediate javascript student to deliver encrypted messages using
            links.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.movieFight}
              alt="Movie Fight"
            />
            <h3 className={classes.title}>Movie Fight</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/movie-fight/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/movie-fight"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.javascript} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.note}>
              The project does not adjust for screen size.
            </span>
            This was my last project using vanilla javascript. I utilised api's
            in this project to call for the user-entered movie data and then
            compare them.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.todoList}
              alt="To-Do list"
            />
            <h3 className={classes.title}>To-Do List</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/todoList/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/todoList"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.reactJs} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.note}>
              The project does not adjust for screen size.
            </span>
            This project was developed by me as an intermediate react javascript
            developer. This project is a straightforward to-do list.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.portfolioV1}
              alt="Portfolio v1"
            />
            <h3 className={classes.title}>Portfolio-V1</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/Portfolio-v1/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/Portfolio-v1"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.reactJs} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.greenNote}>
              The project does adjust for screen size.
            </span>
            Following my introduction to React.js, I created this app. My first
            portfolio project that made extensive use of React.js functions and
            hooks was this project.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.meetUp}
              alt="Meet Up app"
            />
            <h3 className={classes.title}>Next Meetups</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://meet-ups-kohl.vercel.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/meetUps"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.nextJs} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.note}>
              The project does not adjust for screen size.
            </span>
            I created this project so that you can add your own details and have
            them appear on the project's home page. I created this project using
            my basic nextjs skills.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.portfolioV2}
              alt="Portfolio v2"
            />
            <h3 className={classes.title}>Portfolio V2</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://ritiknegi2022.github.io/portfolio-v2/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/portfolio-v2"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.nextJs} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.greenNote}>
              The project does adjust for screen size.
            </span>
            My second project on NextJS is this one. I developed this project
            using next js fundamentals after understanding more about it.
          </p>
        </div>
      </div>
      <div className={classes.cardHolder}>
        <div className={classes.main}>
          <div className={classes.front}>
            <img
              className={classes.thumbnail}
              src={Images.blindChat}
              alt="Blind Chat"
            />
            <h3 className={classes.title}>Blind Chat</h3>
            <div className={classes.info}>
              <div className={classes.linkHolder}>
                <a
                  className={classes.links}
                  href="https://blind-chat-frontend.vercel.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className={classes.links}
                  href="https://github.com/ritikNegi2022/Blind_Chat_Frontend"
                  target="_blank"
                >
                  Github
                </a>
              </div>
              <div className={classes.icons}>
                <img src={Images.html} alt="html 5" />
                <img src={Images.css} alt="css 3" />
                <img src={Images.nextJs} alt="Javascript" />
              </div>
            </div>
          </div>
          <p className={classes.projectInfo}>
            <span className={classes.greenNote}>
              The project does for screen size.
            </span>
            This is my most recent creation. In it, I've built a real-time chat
            application using both the frontend and the backend.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
