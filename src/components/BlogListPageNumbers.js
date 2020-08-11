import React from "react"
import { Link } from "gatsby"

export function BlogListPageNumbers({
  hasPreviousPage,
  hasNextPage,
  currentPage,
  pageCount,
  path,
}) {
  return (
    <ul className="flex mx-auto my-8 w-2/3 justify-center">
      {hasPreviousPage && (
        <li className="mx-8 text-xl">
          <Link
            to={currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`}
          >
            Prev
          </Link>
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
        if (pageNumber > pageCount) return null

        return (
          <li
            className={`mx-8 text-xl ${
              decodeURI(path).match(pageNumber) ? "font-bold" : ""
            }`}
          >
            <Link to={pageNumber === 1 ? `/blog` : `/blog/${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        )
      })}
      {hasNextPage && (
        <li className="mx-8 text-xl">
          <Link to={`/blog/${currentPage + 1}`}>Next</Link>
        </li>
      )}
    </ul>
  )
}
