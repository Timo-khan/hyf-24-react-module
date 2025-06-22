import { CARD_LIST } from "@/data/cards";
import "./parent.css";

import { useState } from "react";
import { Child } from "../child/Child";

export const Parent = () => {
  const [rodentToShow, setRodentTShow] = useState(1);

  const rodentScrollHandler = (id) => {
    let index = id;

    if (index > CARD_LIST.length) {
      index = 1;
    }
    if (index < 1) {
      index = CARD_LIST.length;
    }

    setRodentTShow(index);
  };

  return (
    <div className="scroller-wrapper">
      <p className="scroller-head">Choose a Rodent:</p>
      <Child
        rodent={CARD_LIST.find((x) => x.id === rodentToShow)}
        scrollHandler={rodentScrollHandler}
      />
    </div>
  );
};
