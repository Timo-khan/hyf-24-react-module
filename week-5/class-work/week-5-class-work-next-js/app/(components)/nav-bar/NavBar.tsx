"use client";

import { useContext, useState } from "react";
import "./navBar.css";

import Link from "next/link";
import { ThemeContextClass } from "@/types/theme";
import { ThemeContext } from "@/context/ThemeContext";

export const NavBar = () => {
  const { theme, setTheme } = useContext<ThemeContextClass>(ThemeContext);
  const [themeIndicator, setThemeIndicator] = useState<boolean>(true);

  const handleThemeChange = () => {
    console.log(`change ${theme}`);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setThemeIndicator(!themeIndicator);
  };

  return (
    <nav className="nav-bar-wrap">
      <div className="nav-bar-link-block">
        <Link className="nav-bar-link" href="/">
          Home
        </Link>
        <Link className="nav-bar-link" href="/about">
          About
        </Link>
        <Link className="nav-bar-link" href="/contact-us">
          Contact Us
        </Link>
      </div>
      <div
        onClick={handleThemeChange}
        className={themeIndicator ? "nav-bar-switch dark" : "nav-bar-switch"}
      >
        <div
          className={
            themeIndicator ? "nav-bar-slider dark-sl" : "nav-bar-slider"
          }
        >
          <p className={themeIndicator ? "switch-text dark-t" : "switch-text"}>
            Dark
          </p>
          <div
            className={
              themeIndicator ? "switch-slider dark-sw" : "switch-slider"
            }
          ></div>
          <p className="switch-text">Light</p>
        </div>
      </div>
    </nav>
  );
};
