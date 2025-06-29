/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

import { NASA_URLS, API_KEY } from "@/data/nasaApi";

export default async function Home() {
  const response = await fetch(
    `${NASA_URLS.BASE_URL}${NASA_URLS.PIC_OF_THE_DAY}?api_key=${API_KEY}`
  );
  const data = await response.json();

  return (
    <div className={styles.homePageWrap}>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <p className={styles.homePageHead}>
        Welcome to NASA&apos;s Picture of the Day
      </p>
      <div className={styles.homePagePictureSection}>
        <p className={styles.homePagePictureSectionHead}>{data.title}</p>
        <p className={styles.homePagePictureSectionDate}>
          Captured on: {data.date}
        </p>
        <img
          className={styles.homePagePictureSectionImage}
          src={data.url}
          alt={data.title}
        />
        <p className={styles.homePagePictureSectionDescription}>
          {data.explanation}
        </p>
      </div>
    </div>
  );
}
