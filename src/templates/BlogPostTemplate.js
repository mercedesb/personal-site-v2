import React from "react"
import { TertiaryPageLayout } from "components"

export default function BlogPostTemplate({ pageContext: { post } }) {
  return (
    <TertiaryPageLayout title={post.title}>
      <div
        dangerouslySetInnerHTML={{
          __html: post.mainContent.childMarkdownRemark.html,
        }}
      ></div>
    </TertiaryPageLayout>
  )
}
