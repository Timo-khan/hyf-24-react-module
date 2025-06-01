import styles from "../page.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div>
      <p>Date - {date}</p>
      <p>Taken by Rover - {roverName}</p>
      <img src={src} className={styles.nasaPicOfTheDayImg} />
    </div>
  );
};
