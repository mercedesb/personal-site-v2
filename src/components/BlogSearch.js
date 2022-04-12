import React, { useState } from "react"
import { navigate } from "@reach/router"
import { MagnifyingGlass } from "./MagnifyingGlass"

export function BlogSearch() {
  const [query, setQuery] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/blog/search/?q=${query}`)
  }

  return (
    <form className="mb-8 flex w-full items-center" onSubmit={handleSubmit}>
      <label className="flex-1">
        <span className="sr-only">Search</span>
        <input
          className="p-2 dark:text-brown-900 w-full"
          type="text"
          name="search term"
          onChange={e => setQuery(e.target.value)}
        />
      </label>
      <button type="submit" className="w-8 h-8 -ml-9">
        <MagnifyingGlass className="w-8" />
      </button>
    </form>
  )
}
