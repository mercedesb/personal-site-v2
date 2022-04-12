import React from "react"
import { ThemeContext } from "components"

export function ApplyTheme({ children }) {
  const { darkModeOn } = React.useContext(ThemeContext)

  return (
    <div
      className={`px-8 pt-4 md:px-12 md:pt-12 lg:px-24 min-h-screen ${
        darkModeOn ? "dark" : "light"
      }`}
    >
      {children}
    </div>
  )
}
