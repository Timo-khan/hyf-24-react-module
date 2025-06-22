"use client";

import { Carrot } from "@/public/svg/Carrot";
import { Button } from "../button/Button";
import "./child.css";
import { Card } from "../card/Card";

export const Child = ({ rodent, scrollHandler }) => {
  const scrollPreviousHandler = () => {
    scrollHandler(rodent.id - 1);
  };

  const scrollNextHandler = () => {
    scrollHandler(rodent.id + 1);
  };

  return (
    <div className="child-wrapper">
      <Button
        action={scrollPreviousHandler}
        appearance="icon"
        text={<Carrot appearance="carrot-svg back" />}
      />
      <Card {...rodent} />
      <Button
        action={scrollNextHandler}
        appearance="icon"
        text={<Carrot appearance="carrot-svg forward" />}
      />
    </div>
  );
};
