import React from "react"
import { ThemeContext } from "./layout/ThemeContext"
import { ToggleButton } from "./ToggleButton"
import { Sun } from "./Sun"
import { Moon } from "./Moon"

export function DarkModeToggle() {
  const { darkModeOn, setDarkModeOn } = React.useContext(ThemeContext)

  return (
    <div className="flex items-center ml-auto">
      <div className={`w-6 mr-1 ${darkModeOn ? "" : "hidden"}`} />
      <Sun
        className={`w-6 mr-1 ${darkModeOn ? "hidden" : ""}`}
        fill={!darkModeOn}
      />
      <ToggleButton
        label="Enable dark mode"
        onChange={setDarkModeOn}
        value={darkModeOn}
      />
      <div className={`w-6 ml-1 ${darkModeOn ? "hidden" : ""}`} />
      <Moon
        className={`w-6 ml-1 ${darkModeOn ? "" : "hidden"}`}
        fill={darkModeOn}
      />
    </div>
  )
}
