import React from "react"

export function Button({ type, children }) {
  return (
    <button
      className="px-3 py-3 border rounded-sm w-40 self-end bg-brown-900 text-brown-100 font-bold"
      type={type}
    >
      {children}
    </button>
  )
}
