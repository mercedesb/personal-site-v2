import React, { useState } from "react"
import { Link } from "gatsby"
import { Arrow } from "components"

export function MobileNavigation({ links, logoSvg }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="block md:hidden">
      <div className="flex justify-between items-center ">
        <Link to="/" className="no-underline flex items-baseline">
          <div
            className="w-8 text-brown-900 logo dark:text-brown-100"
            dangerouslySetInnerHTML={{
              __html: logoSvg,
            }}
          ></div>
          <h1 className="text-xl sm:text-2xl m-0">Mercedes Bernard</h1>
        </Link>
        <button
          className="flex items-center text-xl text-right px-2 mt-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="sr-only">Menu</span>
          <Arrow up={showMobileMenu} down={!showMobileMenu} />
        </button>
      </div>
      <div className="flex flex-col pb-6 border-b border-current text-right">
        {showMobileMenu && (
          <ul className={`flex flex-col pt-8 `}>
            {links.map(navLink => (
              <li className="ml-2 mb-4" key={navLink.id}>
                <Link to={`/${navLink.urlSegment}`}>{navLink.navTitle}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
