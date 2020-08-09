import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Nav, BlogListItem } from "components"

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="relative">
        <header className="flex items-end px-16">
          <h2 className="my-0 text-6xl">{page.title}</h2>
        </header>
        <main
          className="px-16 pb-8 w-2/3"
          dangerouslySetInnerHTML={{
            __html: page.mainContent.childMarkdownRemark.html,
          }}
        ></main>
        {page.iconSvg && (
          <div
            className="absolute w-1/2 text-brown-900 top-0 right-0 opacity-05 pr-8 -z-10"
            dangerouslySetInnerHTML={{
              __html: page.iconSvg.svg.svg,
            }}
          ></div>
        )}
      </div>
    </div>
  )
}
