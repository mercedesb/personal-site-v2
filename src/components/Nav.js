import React from "react"
import PropTypes from "prop-types"

export function Nav(props) {
  const navLinks = [
    {
      title: "Contact",
      parsedLink: "#",
      externalLink: false,
      iconSvg: "",
    },
    {
      title: "Blog",
      parsedLink: "#",
      externalLink: false,
      iconSvg: "",
    },
    {
      title: "Let's work together",
      parsedLink: "#",
      externalLink: false,
      iconSvg: "",
    },
  ]
  return (
    <nav className="flex justify-between px-16 py-8">
      <a className="no-underline" href="/">
        <h1 className="text-2xl">Mercedes Bernard</h1>
      </a>
      <ul className="flex">
        {navLinks.map(link => (
          <li className="mx-4">
            <a href={link.parsedLink}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {}
