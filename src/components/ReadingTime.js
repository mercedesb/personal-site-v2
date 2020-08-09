import React from "react"

export function ReadingTime({ content }) {
  const WORDS_PER_MINUTE = 250

  const words = () => {
    const matches = content.match(/[^\s]+/g)
    return matches ? matches.length : 0
  }

  const minutes = () => {
    const minutes = words() / WORDS_PER_MINUTE
    return Math.ceil(minutes.toFixed(2))
  }

  return <span>{minutes()} min read</span>
}
