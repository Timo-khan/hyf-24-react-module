import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="nav-bar-wrapper">
      <Link className="nav-bar-link" href="/">
        Click Counter
      </Link>
      <Link className="nav-bar-link" href="/simple-form">
        Simple Form
      </Link>
      <Link className="nav-bar-link" href="/todo-list">
        ToDo List
      </Link>
      <Link className="nav-bar-link" href="/clock">
        Clock
      </Link>
    </nav>
  );
};
