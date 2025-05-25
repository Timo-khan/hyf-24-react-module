"use client";
import styles from "./home.module.css";

import { useState } from "react";

import { CARD_LIST } from "@/data/cards";

import { Card } from "./(components)/card/Card";
import { Button } from "./(components)/button/Button";

export default function Home() {
  const [panel, setPanel] = useState("");

  const primaryHandler = () => {
    setPanel("Primary");
  };

  const dangerHandler = () => {
    setPanel("Danger");
  };

  const secondaryHandler = () => {
    setPanel("");
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapHead}>Welcome to our team!</h2>
      <h3 className={styles.sectionHead}>Control Panel:</h3>
      <div className={styles.btnSection}>
        <p
          className={
            panel === "Danger"
              ? `${styles.btnDisplay} ${styles.danger}`
              : panel === "Primary"
              ? `${styles.btnDisplay} ${styles.primary}`
              : `${styles.btnDisplay} `
          }
        >
          {panel !== "" ? `${panel} clicked!` : `${panel}`}
        </p>
        <Button
          appearance="primary"
          text="I'm a primary button!"
          action={primaryHandler}
        />
        <Button
          appearance="danger"
          text="I'm a danger button!"
          action={dangerHandler}
        />
        <Button appearance="secondary" text="Reset" action={secondaryHandler} />
      </div>
      <h3 className={styles.sectionHead}>Our valued Contributors:</h3>
      <div className={styles.cardSection}>
        {CARD_LIST.map((x, i) => (
          <Card key={i} {...x} />
        ))}
      </div>
      <h3 className={styles.sectionHead}>Extra Content:</h3>
      <div className={styles.toggleSection}></div>
    </div>
  );
}
