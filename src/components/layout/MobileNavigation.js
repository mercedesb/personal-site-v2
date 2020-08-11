import React, { useState } from "react"
import { Link } from "gatsby"

export function MobileNavigation({ links, logoSvg }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="block md:hidden">
      <div className="flex justify-between items-baseline">
        <Link to="/" className="no-underline flex items-baseline">
          <div
            className="w-8 text-brown-900 logo"
            dangerouslySetInnerHTML={{
              __html: logoSvg,
            }}
          ></div>
          <h1 className="text-2xl m-0">Mercedes Bernard</h1>
        </Link>
        <button
          className="text-xl text-right px-2 my-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          Menu
        </button>
      </div>

      <div className="flex flex-col pb-6 border-b border-current ">
        <ul
          className={`flex flex-col text-right ${
            showMobileMenu ? "block" : "hidden"
          }`}
        >
          {links.map(navLink => (
            <li className="ml-2 mb-4" key={navLink.id}>
              <Link to={`/${navLink.urlSegment}`}>{navLink.navTitle}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
