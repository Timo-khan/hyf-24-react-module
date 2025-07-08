"use client";

import { Theme, ThemeContextType } from "@/types/theme";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context must be used within context provider.");
  }
  return context;
};
