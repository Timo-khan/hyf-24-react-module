"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { FooterLink } from "./FooterLink";
import { FOOTER_LINKS } from "@/data/consts/footerLinks";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.footerLinks}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <FooterLink
            title={FOOTER_LINKS.PAGES[0].title}
            url={FOOTER_LINKS.PAGES[0].url}
          />
          <FooterLink
            title={FOOTER_LINKS.PAGES[1].title}
            url={FOOTER_LINKS.PAGES[1].url}
          />
          <FooterLink
            title={FOOTER_LINKS.PAGES[2].title}
            url={FOOTER_LINKS.PAGES[2].url}
          />
        </ul>
      </div>
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <FooterLink
            icon={FOOTER_LINKS.SOCIAL_MEDIA[0].icon}
            title={FOOTER_LINKS.SOCIAL_MEDIA[0].title}
            url={FOOTER_LINKS.SOCIAL_MEDIA[0].url}
          />
          <FooterLink
            icon={FOOTER_LINKS.SOCIAL_MEDIA[1].icon}
            title={FOOTER_LINKS.SOCIAL_MEDIA[1].title}
            url={FOOTER_LINKS.SOCIAL_MEDIA[1].url}
          />
          <FooterLink
            icon={FOOTER_LINKS.SOCIAL_MEDIA[2].icon}
            title={FOOTER_LINKS.SOCIAL_MEDIA[2].title}
            url={FOOTER_LINKS.SOCIAL_MEDIA[2].url}
          />
          <FooterLink
            icon={FOOTER_LINKS.SOCIAL_MEDIA[3].icon}
            title={FOOTER_LINKS.SOCIAL_MEDIA[3].title}
            url={FOOTER_LINKS.SOCIAL_MEDIA[3].url}
          />
          <FooterLink
            icon={FOOTER_LINKS.SOCIAL_MEDIA[4].icon}
            title={FOOTER_LINKS.SOCIAL_MEDIA[4].title}
            url={FOOTER_LINKS.SOCIAL_MEDIA[4].url}
          />
        </ul>
      </div>
    </footer>
  );
};
