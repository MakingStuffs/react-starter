import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CACHE_KEY } from "../constants/theme";
import { lightTheme, darkTheme } from "../styles";

const theme = {
  lightTheme,
  darkTheme,
};

const defaultThemeState = {
  isDark: true,
  toggleTheme: () => {},
  theme,
};

const ThemeContext = createContext(defaultThemeState);

const ThemeProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storageValue = window.localStorage.getItem(CACHE_KEY);
    return storageValue ? false : true;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    return window.localStorage.getItem(CACHE_KEY)
      ? window.localStorage.removeItem(CACHE_KEY)
      : window.localStorage.setItem(CACHE_KEY, "true");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <StyledThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
