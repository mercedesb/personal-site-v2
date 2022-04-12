import React from "react"
import { Link as GatsbyLink } from "gatsby"

export function Link({ to, className, children }) {
  const isExternal = () => {
    const protocolRelativePattern = /^https?:\/\/|^\/\//i
    return typeof to === "string" && protocolRelativePattern.test(to)
  }

  if (isExternal()) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    )
  } else {
    return (
      <GatsbyLink to={to} className={className}>
        {children}
      </GatsbyLink>
    )
  }
}
