"use client";

import { useThemeContext } from "@/context/ThemeContext";
import "./footer.css";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <footer className={theme === "light" ? "foot light" : "foot dark"}>
      foot foot foot
    </footer>
  );
};
