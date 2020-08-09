import React from "react"
import PropTypes from "prop-types"
import { Nav } from "components"

export function SecondaryPageLayout({ children }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  )
}

SecondaryPageLayout.propTypes = {
  children: PropTypes.object,
}
