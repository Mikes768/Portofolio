import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { themes } from "../styles/theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "day" || savedTheme === "night") {
      return savedTheme;
    }

    return "day";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove(
      "theme-day",
      "theme-night"
    );

    document.documentElement.classList.add(
      theme === "day" ? "theme-day" : "theme-night"
    );

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "day" ? "night" : "day"
    );
  };

  const currentTheme = themes[theme];

  const value = useMemo(
    () => ({
      theme,

      setTheme,

      toggleTheme,

      currentTheme,

      colors: currentTheme.colors,

      isDay: theme === "day",

      isNight: theme === "night",
    }),
    [theme, currentTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider."
    );
  }

  return context;
}