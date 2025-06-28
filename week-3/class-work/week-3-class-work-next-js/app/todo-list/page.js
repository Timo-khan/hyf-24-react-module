import styles from "../page.module.css";

import { ToDoList } from "../(components)/todoList/ToDoList";

export default function TodoList() {
  return (
    <div className={styles.pageWrapper}>
      <p className={styles.pageSectionHead}>To-Do List :</p>
      <div className={styles.pageSection}>
        <ToDoList />
      </div>
    </div>
  );
}
