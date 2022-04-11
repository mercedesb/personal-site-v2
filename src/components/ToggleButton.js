import React, { useState } from "react"

export function ToggleButton({ value, label, disabled, onChange }) {
  const [on, setOn] = useState(value)

  let labelClassName =
    "flex items-center relative h-6 focus:outline-none focus:ring-2 focus:ring-brown-100 focus:border-transparent"
  if (disabled) {
    labelClassName += " cursor-not-allowed"
  }

  let toggleClassName = "toggle w-8 h-4 flex rounded-full border"

  if (disabled) {
    toggleClassName += " bg-gray-300 border-gray-400"
  }
  if (!disabled) {
    toggleClassName += " bg-brown-300 border-brown-900 dark:border-brown-100"
  }
  if (on) {
    toggleClassName += " checked"
  }

  const handleChange = () => {
    const newOnState = !on

    setOn(newOnState)

    if (!!onChange) {
      onChange(newOnState)
    }
  }

  return (
    <label className={labelClassName}>
      <input
        className="sr-only pointer-events-none"
        type="checkbox"
        value={on}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={toggleClassName} />
      <span className="sr-only">{label}</span>
    </label>
  )
}
