import styles from "./marsPage.module.css";

import { PhotoPresentation } from "../(components)/photo-presentation/PhotoPresentation";
import { API_KEY } from "@/data/nasaApi";

export default function MarsRover() {
  return (
    <div className={styles.marsRoverPageWrap}>
      <p className={styles.marsRoverHead}>Mars Rover Photos :</p>
      <PhotoPresentation apiKey={API_KEY} />
    </div>
  );
}
