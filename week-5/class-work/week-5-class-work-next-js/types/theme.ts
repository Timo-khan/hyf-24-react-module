export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export class ThemeContextClass {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  constructor(theme: Theme) {
    this.theme = theme;
    this.setTheme = (theme: Theme) => {
      console.log("class act!");
      this.theme = theme;
    };
  }
}
