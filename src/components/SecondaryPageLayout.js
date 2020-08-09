import React from "react"
import PropTypes from "prop-types"
import { Nav } from "components"

export function SecondaryPageLayout({ children, title, backgroundIcon }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="relative">
        <header className="px-16">
          <h2 className="my-0 text-6xl">{title}</h2>
        </header>
        <main className="px-16 py-8 w-2/3">{children}</main>
        {backgroundIcon && (
          <div
            className="absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10"
            dangerouslySetInnerHTML={{
              __html: backgroundIcon.svg.svg,
            }}
          ></div>
        )}
      </div>
    </div>
  )
}

SecondaryPageLayout.propTypes = {
  children: PropTypes.object,
}
