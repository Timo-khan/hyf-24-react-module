import "./nav-bar.css";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-bar-link" href="/">
        Home
      </Link>
      <Link className="nav-bar-link" href="/why-us">
        Why Us?
      </Link>
    </nav>
  );
};
