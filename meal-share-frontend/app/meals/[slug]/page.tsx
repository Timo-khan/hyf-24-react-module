import styles from "../../page.module.css";

import Link from "next/link";

import { MealDetail } from "@/app/(components)/meals/meal-detail/MealDetail";

export default async function Home() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Meal Details :</p>
      <div className={styles.pageSection}>
        <MealDetail />
      </div>
      <Link href="/meals" className={styles.pageSectionLink}>
        Back to Meals
      </Link>
    </div>
  );
}
