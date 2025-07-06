import { Theme, ThemeContextClass } from "@/types/theme";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextClass>({
  theme: "light",
  setTheme: (theme: Theme) => console.log("base", theme),
});
