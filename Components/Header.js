import classes from "./Header.module.scss";
import ICONS from "../public/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
              <Image
                unoptimized
                className={classes.titleLogo}
                src={ICONS.navLogo}
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
              <Image
                unoptimized
                className={classes.icons}
                src={ICONS.home}
                alt="Home"
              />
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
              <Image
                unoptimized
                className={classes.icons}
                src={ICONS.aboutMe}
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
              <Image
                unoptimized
                className={classes.icons}
                src={ICONS.projects}
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
              <Image
                unoptimized
                className={classes.icons}
                src={ICONS.contactMe}
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
                <Image
                  unoptimized
                  className={classes.icons}
                  src={ICONS.themeSelector}
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
