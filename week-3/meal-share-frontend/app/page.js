import { MealList } from "./(components)/mealList/MealList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Meal List :</p>
      <div className={styles.pageSection}>
        <MealList />
      </div>
    </div>
  );
}
