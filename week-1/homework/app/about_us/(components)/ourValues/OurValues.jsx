import styles from "./ourValues.module.css";

import { OUR_VALUES } from "@/data/consts/ourValues";

export const OurValues = () => {
  return (
    <div>
      <p className={styles.ovSmallHead}>OUR VALUES</p>
      <p className={styles.ovMediumHead}>Rules to Live By</p>
      <div className={styles.ovWrapper}>
        {OUR_VALUES.map((x, i) => (
          <div className={styles.ovBlock} key={i}>
            <p className={styles.ovCounter}>0{x.id}</p>
            <p className={styles.ovSubHead}>{x.title}</p>
            <p className={styles.ovPar}>{x.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
