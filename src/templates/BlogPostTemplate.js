import React from "react"
import { DateUtils } from "utils"
import {
  TertiaryPageLayout,
  ReadingTime,
  PostCategories,
  PostSocialShare,
  HtmlHead,
} from "components"

export default function BlogPostTemplate({ pageContext: { post } }) {
  const dates = [new Date(post.publishDate), new Date(post.updatedAt)]
  const updatedDate = Math.max(...dates)

  return (
    <TertiaryPageLayout title={post.title}>
      <HtmlHead
        title={post.title}
        description={post.preamble ? post.preamble.preamble : null}
        path={`blog/${post.urlSegment}`}
        socialImage={post.socialImage ? post.socialImage.file.url : null}
        canonicalUrl={post.canonicalUrl}
      />
      <div className="mb-8">
        <span className="mr-2 pr-2 border-r border-current">
          <ReadingTime content={post.mainContent.mainContent} />
        </span>
        <span className="mr-2 pr-2 border-r border-current">
          Published {DateUtils.format(post.publishDate)}
        </span>
        <span>Updated {DateUtils.format(updatedDate)}</span>
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
