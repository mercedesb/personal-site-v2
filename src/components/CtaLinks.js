import React from "react"
import { Link } from "components"

export function CtaLinks({ links }) {
  const parsedLinks = links.map(link => {
    const urlSegment = link.internalLink
      ? link.internalLink.urlSegment
      : link.urlSegment

    return {
      id: link.id,
      title: link.navTitle || link.title,
      to: urlSegment ? `/${urlSegment}` : link.externalLink,
    }
  })

  return (
    <div>
      <h4>Related</h4>
      <ul className="flex flex-wrap lg:flex-col">
        {parsedLinks.map(link => (
          <li className="mb-2" key={link.id}>
            <Link to={link.to} className="mx-2 lg:mx-0">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
