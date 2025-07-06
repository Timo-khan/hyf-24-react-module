import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="nav-bar-wrap">
      <Link className="nav-bar-link" href="/">
        Home
      </Link>
      <Link className="nav-bar-link" href="/meals">
        Meals
      </Link>
    </nav>
  );
};
