import React from "react"

export function Arrow({ left, right, up, className }) {
  let direction = "down"
  if (up) {
    direction = "up"
  } else if (left) {
    direction = "left"
  } else if (right) {
    direction = "right"
  }

  return (
    <div className={`w-4 ${direction} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
      >
        <g style={{ fill: "currentColor" }}>
          <polygon points="82.2,44.9 73.6,36.5 51.2,59.4 28.3,37 19.9,45.6 51.4,76.4  " />
        </g>
      </svg>
    </div>
  )
}
