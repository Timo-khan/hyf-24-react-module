import styles from "./marsPage.module.css";

import { PhotoPresentation } from "../(components)/photo-presentation/PhotoPresentation";

export default function MarsRover() {
  return (
    <div className={styles.marsRoverPageWrap}>
      <p className={styles.marsRoverHead}>Mars Rover Photos :</p>
      <PhotoPresentation />
    </div>
  );
}
