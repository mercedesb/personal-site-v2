import React from "react"
import { Link } from "gatsby"

export function DesktopNavigation({ links, logoSvg, withBorder }) {
  return (
    <nav
      className={`hidden justify-between items-baseline pb-8 md:flex ${
        withBorder ? "border-b border-current" : ""
      }`}
    >
      <Link to="/" className="no-underline flex items-baseline">
        <div
          className="w-8 text-brown-900 logo dark:text-brown-100"
          dangerouslySetInnerHTML={{
            __html: logoSvg,
          }}
        ></div>
        <h1 className="text-2xl m-0">Mercedes Bernard</h1>
      </Link>

      <ul className="flex">
        {links.map(navLink => (
          <li className="mb-0 mx-4" key={navLink.id}>
            <Link to={`/${navLink.urlSegment}`}>{navLink.navTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
