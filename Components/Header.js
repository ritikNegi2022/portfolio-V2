import classes from "./Header.module.scss";
import { useEffect } from "react";
import Images from '../ImageProvider/Images'
export let DARK_MODE = false;

function Header() {
  function scrolling(id) {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
  useEffect(() => {
    const initialTheme = localStorage.getItem("darkMode");
    if (initialTheme) {
      if (initialTheme.toLowerCase() == "true") {
        document.getElementById(classes.themeSelector).checked = true;
      } else {
        document.getElementById(classes.themeSelector).checked = false;
      }
    } else {
      document.getElementById(classes.themeSelector).checked = false;
    }
    return;
  });
  const themeHandler = (event) => {
    localStorage.setItem("darkMode", event.target.checked);
  };
  return (
    <>
      <nav className={classes.navBar}>
        <ul className={classes.navLinks}>
          <span className={classes.title}>
            <h3 className={classes.titleText}>Portfolio</h3>
            <div>
              <img
                className={classes.titleLogo}
                src={Images.navLogo}
                alt="NavBar"
              />
            </div>
          </span>
          <li className={classes.listItem}>
            <span
              className={classes.link}
              onClick={() => {
                scrolling("home");
              }}
            >
              <img className={classes.icons} src={Images.home} alt="Home" />
              <h3 className={classes.linkText}>Home</h3>
            </span>
          </li>
          <li className={classes.listItem}>
            <span
              className={classes.link}
              onClick={() => {
                scrolling("aboutMe");
              }}
            >
              <img
                className={classes.icons}
                src={Images.aboutMe}
                alt="About Me"
              />
              <h3 className={classes.linkText}>About Me</h3>
            </span>
          </li>
          <li className={classes.listItem}>
            <span
              className={classes.link}
              onClick={() => {
                scrolling("projects");
              }}
            >
              <img
                className={classes.icons}
                src={Images.project}
                alt="Projects"
              />
              <h3 className={classes.linkText}>Projects</h3>
            </span>
          </li>
          <li className={classes.listItem}>
            <span
              className={classes.link}
              onClick={() => {
                scrolling("contacts");
              }}
            >
              <img
                className={classes.icons}
                src={Images.contact}
                alt="Contact Me"
              />
              <h3 className={classes.linkText}>Contact Me</h3>
            </span>
          </li>
          <li className={classes.listItem}>
            <span className={classes.link}>
              <input
                type="checkbox"
                id={`${classes.themeSelector}`}
                name="themeSelector"
                onChange={themeHandler}
              />
              <label
                htmlFor="Header_themeSelector__kxde7"
                className={classes.label}
              >
                <img
                  className={classes.icons}
                  src={Images.theme}
                  alt="Theme Selector"
                />
                <h3 className={classes.linkText}>Dark</h3>
              </label>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
