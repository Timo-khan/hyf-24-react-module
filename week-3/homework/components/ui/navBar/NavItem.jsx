import Link from "next/link";

export const NavItem = ({ title, link, index, appearance }) => {
  return (
    <li className={appearance}>
      <Link href={link}>
        <b>{index > 9 ? index : `0${index}`}</b> {title}
      </Link>
    </li>
  );
};
