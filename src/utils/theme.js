import { Constants, LocalStorageUtils } from "utils"

function setTheme(theme) {
  window.__theme = theme
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
