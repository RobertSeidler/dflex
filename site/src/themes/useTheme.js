import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";

import { lightTheme, darkTheme } from "./index";
import Header from "../components/LayoutHeader";

import baseStyles from "../styles/GlobalStyles";

function useTheme({ children, location }) {
  const [isDarkThemeActive, toggleTheme] = React.useState(false);

  function toggleActiveTheme() {
    toggleTheme((prev) => !prev);

    window.localStorage.setItem(
      "isDarkThemeActive",
      JSON.stringify(!isDarkThemeActive)
    );
  }

  function retrieveActiveTheme() {
    const storedIsDarkThemeActive = JSON.parse(
      window.localStorage.getItem("isDarkThemeActive")
    );

    toggleTheme(storedIsDarkThemeActive);
  }

  React.useEffect(() => {
    retrieveActiveTheme();
  }, []);

  const currentActiveTheme = isDarkThemeActive ? darkTheme : lightTheme;

  return (
    <div>
      <Global styles={baseStyles} />
      <Header
        location={location}
        isDarkThemeActive={isDarkThemeActive}
        toggleActiveTheme={toggleActiveTheme}
      />
      <EmotionThemeProvider theme={currentActiveTheme}>
        {children}
      </EmotionThemeProvider>
    </div>
  );
}

export default useTheme;
