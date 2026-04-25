import React, { useState, createContext } from "react"
import { Constants, Theme } from "utils"

const STYLE_CONFIG = {
  theme: {
    colors: {
      brown: {
        "900": "#3D2B0A",
      },
    },
  },
}

export const ThemeContext = createContext({
  darkModeOn: null,
  setDarkModeOn: () => {},
  styleConfig: {},
})

export function ThemeProvider({ children }) {
  // set in Gatsby's onRenderBody (via ./utils/theme.js)
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? window.__theme : Constants.LIGHT_THEME
  )

  const toggleTheme = on => {
    if (on) {
      Theme.setPreferredTheme(Constants.DARK_THEME)
      setTheme(Constants.DARK_THEME)
    } else {
      Theme.setPreferredTheme(Constants.LIGHT_THEME)
      setTheme(Constants.LIGHT_THEME)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        darkModeOn: theme === Constants.DARK_THEME,
        setDarkModeOn: toggleTheme,
        styleConfig: STYLE_CONFIG,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
