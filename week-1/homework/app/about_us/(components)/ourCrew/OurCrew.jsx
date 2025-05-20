import styles from "./ourCrew.module.css";

import Image from "next/image";

import { OUR_CREW } from "@/data/consts/ourCrew";

export const OurCrew = () => {
  return (
    <div className={styles.ocMain}>
      <p className={styles.ocSmallHead}>OUR TEAM</p>
      <p className={styles.ocMediumHead}>Who we are</p>
      <p className={styles.ocHeadPar}>{OUR_CREW.BLURB}</p>
      <div className={styles.ocWrapper}>
        {OUR_CREW.CREW_MEMBERS.map((x, i) => (
          <div key={i}>
            <Image src={x.image} alt={x.name} height={280} width={140} />
            <p className={styles.ocName}>{x.name}</p>
            <p className={styles.ocPosition}>{x.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
