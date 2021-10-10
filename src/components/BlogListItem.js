import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { ReadingTime } from "components"

export function BlogListItem({ post }) {
  const { id, title, preamble, publishDate, urlSegment, mainContent } = post
  return (
    <div key={id} className="border-b border-current mt-4">
      <Link className="no-underline" to={`/blog/${urlSegment}`}>
        <h3>{title}</h3>
        <p className="mb-0">
          <span className="font-bold">
            {moment(publishDate).format("MMMM DD, YYYY")}
          </span>
          <span className="ml-2 pl-2 border-l border-current font-normal">
            <ReadingTime content={mainContent.mainContent} />
          </span>
        </p>
        {preamble && (
          <div
            className="font-normal mt-4"
            dangerouslySetInnerHTML={{
              __html: preamble.childMarkdownRemark.html,
            }}
          ></div>
        )}
      </Link>
    </div>
  )
}
