import styles from "../page.module.css";

import { SimpleForm } from "../(components)/form/SimpleForm";

export default function SimpleFormPage() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Simple Form :</p>
      <div className={styles.pageSection}>
        <SimpleForm />
      </div>
    </div>
  );
}
