import React, { useState, createContext } from "react"
import { SessionStorageUtils } from "utils"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../../tailwind.config.js"

export const ThemeContext = createContext({
  darkModeOn: null,
  setDarkModeOn: () => {},
  styleConfig: {},
})

export function ThemeProvider({ children }) {
  const LOCAL_STORAGE_KEY = "theme"
  const LIGHT = "light"
  const DARK = "dark"

  const styleConfig = resolveConfig(tailwindConfig)

  const darkModePrefFromSessionStorage = SessionStorageUtils.get(
    LOCAL_STORAGE_KEY
  )
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const darkModeFromMediaQuery = !mediaQuery || mediaQuery.matches

  let initialTheme
  if (darkModePrefFromSessionStorage !== null) {
    initialTheme = darkModePrefFromSessionStorage
  } else {
    initialTheme = darkModeFromMediaQuery ? DARK : LIGHT
  }

  const [theme, setTheme] = useState(initialTheme)

  const toggleTheme = on => {
    if (on) {
      setTheme(DARK)
      SessionStorageUtils.set(LOCAL_STORAGE_KEY, DARK)
    } else {
      setTheme(LIGHT)
      SessionStorageUtils.set(LOCAL_STORAGE_KEY, LIGHT)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        darkModeOn: theme === DARK,
        setDarkModeOn: toggleTheme,
        styleConfig: styleConfig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
