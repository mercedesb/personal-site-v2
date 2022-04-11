import React from "react"
import { ThemeContext } from "./layout/ThemeContext"

export function MagnifyingGlass({ className }) {
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
          cx="269.801"
          cy="239.175"
          rx="237.801"
          ry="239.175"
          style={{ strokeWidth: 24, stroke: color }}
        />
        <circle
          cx="271.175"
          cy="239.175"
          r="206.186"
          style={{ strokeWidth: 16, stroke: color }}
        />
        <path
          d="M447.12 178.694C431.355 131.546 397.1 92.8409 352.944 71.1535C328.278 59.0386 300.523 52.2339 271.175 52.2339"
          style={{ strokeWidth: 10, stroke: color }}
        />
        <path
          d="M403.134 438.736L502.02 544.33L540.087 511.992L543.34 509.228L442.836 404.124"
          style={{ strokeWidth: 12, stroke: color }}
        />
        <path
          d="M541.911 509.549L559.049 494.845C559.049 494.845 768.77 714.776 768.77 728.842C768.77 742.907 706.613 800 689.904 800C673.196 800 488.357 555.53 488.357 555.53L502.35 543.446"
          style={{ strokeWidth: 18, stroke: color }}
        />
      </g>
    </svg>
  )
}
