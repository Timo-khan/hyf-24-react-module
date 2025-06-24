import "./navBar.css";

import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="nav-bar-wrap">
      <Link href="./" className="nav-bar-link">
        Home
      </Link>
      <Link href="./mars-rover" className="nav-bar-link">
        Mars Rover Photos
      </Link>
    </nav>
  );
};
