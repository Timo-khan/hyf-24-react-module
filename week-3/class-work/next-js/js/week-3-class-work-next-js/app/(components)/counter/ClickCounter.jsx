"use client";

import { Button } from "../button/Button";
import "./clickCounter.css";

import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="cc-wrap">
      <p className="cc-head">Click Counter :</p>
      <div className="cc-display">{count > 9 ? count : `0${count}`}</div>
      <Button
        action={countHandler}
        appearance="primary"
        text="Click to add to Count"
      />
    </div>
  );
};
