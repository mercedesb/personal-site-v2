import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { ReadingTime } from "components"

export function BlogListItem({ post }) {
  const { id, title, preamble, publishDate, urlSegment, mainContent } = post
  return (
    <div key={id} className="border-b border-current mt-4">
      <Link className="no-underline" to={`/blog/${urlSegment}`}>
        <h3 className="text-3xl">{title}</h3>
        <p className="mb-0">
          <span className="font-bold">
            {moment(publishDate).format("MMMM DD, YYYY")}
          </span>
          <span className="ml-2 pl-2 border-l border-current font-normal">
            <ReadingTime content={mainContent.mainContent} />
          </span>
        </p>
        {preamble && (
          <p
            className="font-normal"
            dangerouslySetInnerHTML={{
              __html: preamble.childMarkdownRemark.html,
            }}
          ></p>
        )}
      </Link>
    </div>
  )
}
