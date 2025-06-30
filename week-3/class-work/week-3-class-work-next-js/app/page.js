import styles from "./page.module.css";

import { ClickCounter } from "./(components)/counter/ClickCounter";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Click Counter :</p>
      <div className={styles.pageSection}>
        <ClickCounter />
      </div>
    </div>
  );
}
