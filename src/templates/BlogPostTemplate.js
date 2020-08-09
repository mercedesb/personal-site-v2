import React from "react"
import moment from "moment"
import {
  TertiaryPageLayout,
  ReadingTime,
  PostCategories,
  PostSocialShare,
} from "components"

export default function BlogPostTemplate({ pageContext: { post } }) {
  return (
    <TertiaryPageLayout title={post.title}>
      <div className="mb-8">
        <span className="mr-2 pr-2 border-r border-current">
          <ReadingTime content={post.mainContent.mainContent} />
        </span>
        <span className="mr-2 pr-2 border-r border-current">
          Published {moment(post.publishDate).format("MMMM DD, YYYY")}
        </span>
        <span>Updated {moment(post.updatedAt).format("MMMM DD, YYYY")}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post.mainContent.childMarkdownRemark.html,
        }}
      ></div>
      {post.tags && <PostCategories tags={post.tags} />}
      <PostSocialShare
        urlSegment={post.urlSegment}
        title={post.title}
        preamble={post.preamble}
      />
    </TertiaryPageLayout>
  )
}
