import styles from "../page.module.css";

import { ToDoList } from "../(components)/todoList/ToDoList";

export default function TodoList() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>Simple Form :</p>
      <div className={styles.pageSection}>
        <ToDoList />
      </div>
    </div>
  );
}
