import React from "react"
import PropTypes from "prop-types"
import { Nav } from "components"

export function TertiaryPageLayout({ children, title }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="relative">
        <header className="px-16">
          <h2 className="my-0 text-6xl">{title}</h2>
        </header>
        <main className="px-16 py-8 w-4/5">{children}</main>
      </div>
    </div>
  )
}

TertiaryPageLayout.propTypes = {
  children: PropTypes.object,
}
