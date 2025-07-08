"use client";

import "./navBar.css";

import Link from "next/link";
import { useState } from "react";

import { useThemeContext } from "@/context/ThemeContext";

export const NavBar = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav
      className={
        theme === "dark"
          ? "nav-bar-wrap theme-dark"
          : "nav-bar-wrap theme-light"
      }
    >
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
        className={theme === "dark" ? "nav-bar-switch dark" : "nav-bar-switch"}
      >
        <div
          className={
            theme === "dark" ? "nav-bar-slider dark-sl" : "nav-bar-slider"
          }
        >
          <p
            className={theme === "dark" ? "switch-text dark-t" : "switch-text"}
          >
            Dark
          </p>
          <div
            className={
              theme === "dark" ? "switch-slider dark-sw" : "switch-slider"
            }
          ></div>
          <p className="switch-text">Light</p>
        </div>
      </div>
    </nav>
  );
};
