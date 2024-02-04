import React from "react";
import styles from "./NavLeft.module.scss";
import { Link } from "react-router-dom";

type NavLeftProps = {
  children: JSX.Element;
};

function NavLeft() {
  const arrayLinks: string[] = [
    "bets",
    "pro",
    "games",
    "streamers",
    "ladder",
    "promo",
    "news",
  ];

  const [activeLink, setActiveLink] = React.useState(0);

  return (
    <ul className={styles.nav__left}>
      {arrayLinks.map((link, i) => (
        <li
          className={styles.nav__item}
          onClick={() => setActiveLink(i)}
          key={i}
        >
          <Link
            to={"/" + link}
            className={styles.link + (i === activeLink ? " active" : "")}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLeft;
