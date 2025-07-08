"use client";

import "./homePage.css";

import { useThemeContext } from "@/context/ThemeContext";

import { LOREM_IPSUM } from "../../../data/loremIpsum";

type Props = {
  head: string;
};

export const HomePage = ({ head }: Props) => {
  const { theme } = useThemeContext();

  return (
    <div className={theme === "dark" ? "page-wrap dark" : "page-wrap light"}>
      <h3 className="page-head">{head}</h3>
      {LOREM_IPSUM.map((x, i) => (
        <p className="page-par" key={i}>
          {x}
        </p>
      ))}
    </div>
  );
};
