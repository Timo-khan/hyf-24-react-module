import { EpicImageFinder } from "../(components)/epic-image-finder/EpicImageFinder";
import styles from "./epicPage.module.css";
import { API_KEY } from "@/data/nasaApi";

export default function EpicImages() {
  return (
    <div className={styles.epicPageWrap}>
      <p className={styles.epicHead}>EPIC Images :</p>
      <EpicImageFinder apiKey={API_KEY} />
    </div>
  );
}
