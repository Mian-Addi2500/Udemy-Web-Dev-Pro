import { createContext, useContext } from "react";
// create context
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});
// theme provider
export const ThemeProvider = ThemeContext.Provider;
// custom hook
export default function useTheme () {
  return useContext(ThemeContext);
};
