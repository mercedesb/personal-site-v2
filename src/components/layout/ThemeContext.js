import React, { useState, createContext } from "react"
import { Constants, Theme } from "utils"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../../tailwind.config.js"

export const ThemeContext = createContext({
  darkModeOn: null,
  setDarkModeOn: () => {},
  styleConfig: {},
})

export function ThemeProvider({ children }) {
  // set in Gatsby's onRenderBody (via ./utils/theme.js)
  const [theme, setTheme] = useState(
    !!window ? window.__theme : Constants.LIGHT_THEME
  )

  const styleConfig = resolveConfig(tailwindConfig)

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
        styleConfig: styleConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
