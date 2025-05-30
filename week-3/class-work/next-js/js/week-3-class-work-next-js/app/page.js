import styles from "./page.module.css";

import { ClickCounter } from "./(components)/counter/ClickCounter";
import { SimpleForm } from "./(components)/form/SimpleForm";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Click Counter :</p>
      <div className={styles.pageSection}>
        <ClickCounter />
      </div>
      <p className={styles.pageSectionHead}>Simple Form :</p>
      <div className={styles.pageSection}>
        <SimpleForm />
      </div>
    </div>
  );
}
