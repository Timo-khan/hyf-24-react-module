"use client";

import "./button.css";

export const Button = ({
  action = () => console.log("click!"),
  type = "button",
  appearance,
  text,
}) => {
  return (
    <button onClick={action} className={appearance} type={type}>
      {text}
    </button>
  );
};
