import React from "react"
import PropTypes from "prop-types"
import { SecondaryPageLayout } from "components"

export default function BlogPostTemplate({ pageContext: { post } }) {
  return (
    <SecondaryPageLayout>
      <header className="px-16">
        <h2 className="my-0 text-6xl">{post.title}</h2>
      </header>
      <main
        className="px-16 pb-8 w-4/5"
        dangerouslySetInnerHTML={{
          __html: post.mainContent.childMarkdownRemark.html,
        }}
      ></main>
    </SecondaryPageLayout>
  )
}

BlogPostTemplate.propTypes = {}
