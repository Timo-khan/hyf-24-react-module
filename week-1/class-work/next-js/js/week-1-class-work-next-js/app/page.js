import styles from "./home.module.css";

import Image from "next/image";

import { Greeting } from "./(components)/greeting/Greeting";
import { Cards } from "./(components)/cards/Cards";
import { PEOPLE } from "../data/people";
import { Person } from "./(components)/person/Person";
import { Button } from "./(components)/button/Button";
import { Input } from "./(components)/input/Input";

export default function Home() {
  return (
    <main>
      <Greeting />
      <div className={styles.cards}>
        <Cards />
      </div>
      <div className={styles.people}>
        {PEOPLE.map((p, i) => (
          <Person key={i} name={p.name} age={p.age} />
        ))}
      </div>
      <div className={styles.form}>
        <h2>check out this form</h2>
        <Input />
        <div>
          <Button kind="primary" />
          <Button kind="danger" />
        </div>
      </div>
      <div className={styles.profile}>
        <h3>hi, this is my profile</h3>
        <Image src="/rat.jpg" alt="it me!" width={200} height={140} />
      </div>
    </main>
  );
}
