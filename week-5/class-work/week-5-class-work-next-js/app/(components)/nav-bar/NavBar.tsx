import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
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
      <div className="nav-bar-switch-block">
        <label className="nav-bar-label" htmlFor="theme">
          Theme
        </label>
        <input name="theme" type="checkbox" className="nav-bar-switch" />
      </div>
    </nav>
  );
};
