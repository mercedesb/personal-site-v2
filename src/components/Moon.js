import React from "react"

export function Moon({ className }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M427.266 31.9482C418.048 31.3196 408.74 31 399.355 31C185.977 31 13 196.207 13 400C13 603.793 185.977 769 399.355 769C604.807 769 772.804 615.838 785 422.542"
          style={{ strokeWidth: 40 }}
        />
        <path
          d="M423.686 32C352.839 77.7904 307 150.766 307 232.97C307 371.61 437.386 484 598.224 484C669.776 484 735.3 461.757 786 424.856"
          style={{ strokeWidth: 48 }}
        />
      </svg>
    </div>
  )
}
