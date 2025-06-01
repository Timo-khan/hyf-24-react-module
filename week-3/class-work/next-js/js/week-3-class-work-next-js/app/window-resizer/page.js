import styles from "../page.module.css";

import { WindowResizer } from "../(components)/windowResizer/WindowResizer";

export default function WindowResizerPage() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Window Resizer :</p>
      <div className={styles.pageSection}>
        <WindowResizer />
      </div>
    </div>
  );
}
