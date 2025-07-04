"use client";

import { useState } from "react";
import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleTheme = () => {
    setTheme(!theme);
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
        onClick={handleTheme}
        className={theme ? "nav-bar-switch dark" : "nav-bar-switch"}
      >
        <div className={theme ? "nav-bar-slider dark-sl" : "nav-bar-slider"}>
          <p className={theme ? "switch-text dark-t" : "switch-text"}>Dark</p>
          <div
            className={theme ? "switch-slider dark-sw" : "switch-slider"}
          ></div>
          <p className="switch-text">Light</p>
        </div>
      </div>
    </nav>
  );
};
