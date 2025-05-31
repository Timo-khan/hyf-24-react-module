import styles from "../page.module.css";

import { Clock } from "../(components)/clock/Clock";

export default function ClockPage() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Click Counter :</p>
      <div className={styles.pageSection}>
        <Clock />
      </div>
    </div>
  );
}
