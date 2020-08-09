import React from "react"
import { Link } from "gatsby"

export function BlogListPageNumbers({
  hasPreviousPage,
  hasNextPage,
  currentPage,
}) {
  return (
    <ul className="flex mx-auto my-8 w-2/3 justify-center">
      {hasPreviousPage && (
        <li className="mx-8 text-xl">
          <Link to={`/blog/${currentPage - 1}`}>{"<<"}</Link>
        </li>
      )}
      {Array.from({
        length: 5,
      }).map((_, index) => {
        let indexOffset = 2
        let pageNumber

        if (currentPage > indexOffset) {
          pageNumber = currentPage + index - indexOffset
        } else {
          pageNumber = index + 1
        }
        return (
          <li className="mx-8 text-xl">
            <Link to={pageNumber === 1 ? `/blog` : `/blog/${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        )
      })}
      {hasNextPage && (
        <li className="mx-8 text-xl">
          <Link to={`/blog/${currentPage + 1}`}>{">>"}</Link>
        </li>
      )}
    </ul>
  )
}
