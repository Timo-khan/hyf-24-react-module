import styles from "../../home.module.css";

export const Person = ({ name, age }) => {
  return (
    <div>
      {age > 18 ? (
        <h4 className={styles.adult}>{name} is an adult.</h4>
      ) : (
        <h4 className={styles.minor}>{name} is a minor.</h4>
      )}
    </div>
  );
};
