import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Welcome to the MealSharing App !</p>
      <div className={styles.pageSection}>
        <p className={styles.pageSectionParagraph}>
          Check out our meal sharing services!
        </p>
      </div>
    </div>
  );
}
