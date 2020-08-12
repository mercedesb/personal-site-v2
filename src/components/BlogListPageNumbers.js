import React from "react"
import { Link } from "gatsby"

export function BlogListPageNumbers({
  hasPreviousPage,
  hasNextPage,
  currentPage,
  pageCount,
  path,
}) {
  const getPageNumber = index => {
    let indexOffset = 2
    let pageNumber = index + 1

    if (currentPage > indexOffset) {
      pageNumber = currentPage + index - indexOffset
    }

    return pageNumber
  }

  const pageNumberIsActive = (pageNumber, urlPath) => {
    let active = false
    if (pageNumber === 1 && urlPath.match(/[^0-9\/]\/?$/)) {
      active = true
    } else if (
      pageNumber > 1 &&
      urlPath.match(new RegExp(`${pageNumber}\/?$`))
    ) {
      active = true
    }
    return active
  }

  const getBasePath = () => {
    const regexToRemoveLeadingTrailingSlashAndPageNumber = /^.|(\/?\d?\/?$)(?!.*\d)/g
    return decodeURI(path).replace(
      regexToRemoveLeadingTrailingSlashAndPageNumber,
      ""
    )
  }

  const basePath = getBasePath()

  return (
    <ul className="flex mx-auto my-8 w-2/3 justify-center">
      {hasPreviousPage && (
        <li className="mx-4 text-xl md:mx-8">
          <Link
            to={
              currentPage - 1 === 1
                ? `/${basePath}`
                : `/${basePath}/${currentPage - 1}`
            }
          >
            Prev
          </Link>
        </li>
      )}
      {Array.from({
        length: 5,
      }).map((_, index) => {
        const pageNumber = getPageNumber(index)
        if (pageNumber > pageCount) return null

        return (
          <li
            key={index}
            className={`mx-4 text-xl md:mx-8 ${
              pageNumberIsActive(pageNumber, decodeURI(path)) ? "font-bold" : ""
            }`}
          >
            <Link
              to={
                pageNumber === 1 ? `/${basePath}` : `/${basePath}/${pageNumber}`
              }
            >
              {pageNumber}
            </Link>
          </li>
        )
      })}
      {hasNextPage && (
        <li className="mx-4 text-xl md:mx-8">
          <Link to={`/${basePath}/${currentPage + 1}`}>Next</Link>
        </li>
      )}
    </ul>
  )
}
