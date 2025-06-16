import styles from "./ourPartners.module.css";

import Image from "next/image";

import { OUR_PARTNERS } from "@/data/consts/ourPartners";

export const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <p className={styles.opSmallHead}>OUR PARTNERS</p>
      <p className={styles.opMediumHead}>{OUR_PARTNERS.BLURB}</p>
      <div className={styles.opWrapper}>
        {OUR_PARTNERS.PARTNER_LIST.map((x, i) => (
          <div className={styles.opBlock} key={i}>
            <Image src={x.logo} alt={x.alt} width={100} height={28} />
          </div>
        ))}
      </div>
    </div>
  );
};
