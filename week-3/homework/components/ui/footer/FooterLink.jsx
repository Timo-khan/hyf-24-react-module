import "./footerLink.css";

import Link from "next/link";

export const FooterLink = ({ icon, title, url }) => {
  return (
    <li>
      <Link className="footer-link" href={url}>
        {icon && icon}
        {title}
      </Link>
    </li>
  );
};
