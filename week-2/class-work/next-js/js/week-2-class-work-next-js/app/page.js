"use client";
import styles from "./home.module.css";

import { useState } from "react";

import { CARD_LIST } from "@/data/cards";

import { Card } from "./(components)/card/Card";
import { Button } from "./(components)/button/Button";
import { Carrot } from "@/public/svg/Carrot";
import { ToggleContent } from "./(components)/toggle-content/ToggleContent";
import { Counter } from "./(components)/counter/Counter";
import { Form } from "./(components)/form/Form";
import { Parent } from "./(components)/parent/Parent";

export default function Home() {
  const [panel, setPanel] = useState("");
  const [showCounter, setShowCounter] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showRodentFilter, setShowRodentFilter] = useState(false);

  const primaryHandler = () => {
    setPanel("Primary");
  };

  const dangerHandler = () => {
    setPanel("Danger");
  };

  const secondaryHandler = () => {
    setPanel("");
  };

  const showCounterToggleHandler = () => {
    setShowCounter(!showCounter);
  };

  const showFormToggleHandler = () => {
    setShowForm(!showForm);
  };

  const showRodentFilterToggleHandler = () => {
    setShowRodentFilter(!showRodentFilter);
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
      <div className={styles.toggleSection}>
        <div className={styles.toggleLine}>
          <Button
            appearance="icon"
            action={showCounterToggleHandler}
            text={
              <Carrot
                appearance={showCounter ? `carrot-svg` : `carrot-svg closed`}
              />
            }
          />
          <p className={styles.togglePar}>Show Counter</p>
        </div>
        <ToggleContent content={<Counter />} show={showCounter} />
        <div className={styles.toggleLine}>
          <Button
            appearance="icon"
            action={showFormToggleHandler}
            text={
              <Carrot
                appearance={showForm ? `carrot-svg` : `carrot-svg closed`}
              />
            }
          />
          <p className={styles.togglePar}>Show Form</p>
        </div>
        <ToggleContent content={<Form />} show={showForm} />
        <div className={styles.toggleLine}>
          <Button
            appearance="icon"
            action={showRodentFilterToggleHandler}
            text={
              <Carrot
                appearance={
                  showRodentFilter ? `carrot-svg` : `carrot-svg closed`
                }
              />
            }
          />
          <p className={styles.togglePar}>Show Rodent Filter</p>
        </div>
        <ToggleContent content={<Parent />} show={showRodentFilter} />
      </div>
    </div>
  );
}
