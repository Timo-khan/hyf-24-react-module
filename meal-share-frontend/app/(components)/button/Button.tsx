import "./button.css";

import { ReactNode } from "react";

type Props = {
  action: () => void;
  appearance: string;
  text: string | ReactNode;
  type: "button" | "reset" | "submit";
};

export const Button = ({
  action,
  appearance,
  text,
  type = "button",
}: Props) => {
  return (
    <button onClick={action} className={appearance} type={type}>
      {text}
    </button>
  );
};
