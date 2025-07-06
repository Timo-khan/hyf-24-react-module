"use client";

import { Theme } from "@/types/theme";
import { FC, ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("light");

  const value = {
    theme: themeMode,
    setTheme: setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
