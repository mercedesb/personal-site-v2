import React from "react"
import { ThemeContext } from "components"

export function MagnifyingGlass({ className, thick }) {
  const { styleConfig } = React.useContext(ThemeContext)
  const color = styleConfig.theme.colors.brown["900"]

  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <ellipse
          cx="279.864"
          cy="253.123"
          rx="217.864"
          ry="219.123"
          style={
            thick ? { strokeWidth: 24, stroke: color } : { strokeWidth: 10 }
          }
        />
        <circle
          cx="281.123"
          cy="253.125"
          r="188.899"
          style={
            thick ? { strokeWidth: 16, stroke: color } : { strokeWidth: 6 }
          }
        />
        <path
          d="M442.317 197.712C427.873 154.516 396.49 119.056 356.037 99.1869C333.439 88.0877 308.01 81.8535 281.123 81.8535"
          style={thick ? { strokeWidth: 8, stroke: color } : { strokeWidth: 2 }}
        />
        <path
          d="M402.019 435.952L492.614 532.693L527.489 503.066L530.47 500.534L438.392 404.241"
          style={
            thick ? { strokeWidth: 16, stroke: color } : { strokeWidth: 6 }
          }
        />
        <path
          d="M529.161 500.829L544.862 487.357C544.862 487.357 737 688.85 737 701.736C737 714.622 680.054 766.928 664.746 766.928C649.439 766.928 480.097 542.954 480.097 542.954L492.917 531.884"
          style={
            thick ? { strokeWidth: 20, stroke: color } : { strokeWidth: 10 }
          }
        />
      </g>
    </svg>
  )
}
