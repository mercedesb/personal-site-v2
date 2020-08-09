import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import moment from "moment"

export function BlogListItem({ post }) {
  const { id, title, preamble, publishDate, tags, urlSegment } = post
  return (
    <div key={id} className="border-b border-current">
      <Link className="no-underline" to={`/blog/${urlSegment}`}>
        <h3 className="text-3xl">{title}</h3>
        <p className="mb-0">
          <strong>{moment(publishDate).format("MMMM DD, YYYY")}</strong>
        </p>
        {preamble && (
          <p
            dangerouslySetInnerHTML={{
              __html: preamble.childMarkdownRemark.html,
            }}
          ></p>
        )}
      </Link>
    </div>
  )
}

BlogListItem.propTypes = {}
