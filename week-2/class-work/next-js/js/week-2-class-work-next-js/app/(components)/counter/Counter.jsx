"use client";

import { Button } from "../button/Button";
import "./counter.css";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-wrap">
      <p
        className={
          count === 0
            ? `count-display`
            : count < 0
            ? `count-display minus`
            : `count-display plus`
        }
      >
        {count < 10 && count > -1 ? `0${count}` : count}
      </p>
      <div className="count-btn-sec">
        <Button appearance="primary" action={increaseHandler} text="+" />
        <Button appearance="primary" action={decreaseHandler} text="-" />
      </div>
    </div>
  );
};
