import { DataFetcher } from "../(components)/dataFetcher/DataFetcher";
import styles from "../page.module.css";

export default function DataFetch() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Data Fetcher :</p>
      <div className={styles.pageSection}>
        <DataFetcher />
      </div>
    </div>
  );
}
