import { Constants, LocalStorageUtils } from "utils"

function setTheme(theme) {
  if (typeof window !== "undefined") {
    window.__theme = theme
    document.documentElement.className = theme
  }
}

const theme = {
  // Save the user's explicit theme preference.
  setPreferredTheme: function (theme) {
    setTheme(theme)
    try {
      LocalStorageUtils.set(Constants.THEME_KEY, theme)
    } catch (e) {}
  },
}

export default theme
