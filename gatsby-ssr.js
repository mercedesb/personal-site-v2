const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function () {
          const THEME_KEY = "preferred-theme"

          function checkPreferredTheme() {
            try {
              const preferredTheme = localStorage.getItem(THEME_KEY)
              return JSON.parse(preferredTheme)
            } catch (e) {}
          }

          function checkOsTheme() {
            const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
            return darkQuery.matches ? "dark" : "light"
          }

          function setTheme(theme) {
            window.__theme = theme
          }

          const preferredTheme = checkPreferredTheme()
          const osTheme = checkOsTheme()
          setTheme(preferredTheme || osTheme)
        })()
        `,
      }}
    />,
  ])
}
