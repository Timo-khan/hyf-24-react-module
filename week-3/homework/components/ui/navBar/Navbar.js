"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { NavItem } from "./NavItem";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          <NavItem
            title={navbarItems[0].title}
            appearance={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[0].link === currentPath,
            })}
            link={navbarItems[0].link}
            index={1}
          />
          <NavItem
            title={navbarItems[1].title}
            appearance={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[1].link === currentPath,
            })}
            link={navbarItems[1].link}
            index={2}
          />
          <NavItem
            title={navbarItems[2].title}
            appearance={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[2].link === currentPath,
            })}
            link={navbarItems[2].link}
            index={3}
          />
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};
