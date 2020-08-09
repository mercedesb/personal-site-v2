import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

export function Nav(props) {
  const data = useStaticQuery(graphql`
    query {
      contentfulHome {
        contentfulchildren {
          id
          title
          urlSegment
          navTitle
        }
      }
      contentfulIcon(title: { eq: "Little Plant" }) {
        id
        svg {
          svg
        }
      }
    }
  `)

  return (
    <nav className="flex justify-between px-16 py-8 items-baseline">
      <Link to="/" className="no-underline flex items-baseline">
        <div
          className="w-8 text-brown-900 logo"
          dangerouslySetInnerHTML={{
            __html: data.contentfulIcon.svg.svg,
          }}
        ></div>
        <h1 className="text-2xl m-0">Mercedes Bernard</h1>
      </Link>
      <ul className="flex">
        {data.contentfulHome.contentfulchildren.map(navLink => (
          <li className="mx-4" key={navLink.id}>
            <Link to={`/${navLink.urlSegment}`}>{navLink.navTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Nav.propTypes = {}
