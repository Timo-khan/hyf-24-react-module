"use client";

// import { useContext } from "react";

// import { ThemeContext } from "@/context/ThemeContext";
import { HomePage } from "./(components)/home-page/HomePage";

export default function Home() {
  // const theme = useContext(ThemeContext);

  return (
    <div>
      {/* <ThemeContext value={theme}> */}
      <HomePage />
      {/* </ThemeContext> */}
    </div>
  );
}
