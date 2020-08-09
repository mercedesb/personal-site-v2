import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Nav, BlogListItem } from "components"

export default function BlogListTemplate({ data }) {
  const blogPosts = data.allContentfulBlogPost.edges
  const pageInfo = data.allContentfulBlogPost.pageInfo

  return (
    <div>
      <div>
        <Nav />
      </div>
      <header className="flex items-end p-8">
        <div
          className="w-24 text-brown-900 mr-4"
          dangerouslySetInnerHTML={{
            __html: data.contentfulIcon.svg.svg,
          }}
        ></div>
        <h2 className="my-0 text-6xl">Blog</h2>
      </header>
      <div className="flex justify-between">
        <main className="px-16 pb-8 w-2/3">
          {blogPosts.map(({ node }, index) => {
            return <BlogListItem post={node} />
          })}
        </main>
        <aside className="border-l border-current border-opacity-50 pl-8 pr-32 sticky top-0">
          <h4>Categories</h4>
          <ul className="flex flex-col">
            <li className="my-4">
              <Link to={`/blog`}>All</Link>
            </li>

            {[
              "Computer science",
              "Mentorship",
              "Conferences",
              "Tips, tricks, & how-tos",
            ].map(category => (
              <li className="mb-8">
                <Link to={`/blog/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <footer>
        <ul className="flex mx-auto my-8 w-2/3 justify-center">
          {pageInfo.hasPreviousPage && (
            <li className="mx-8">
              <Link to={`/blog/${pageInfo.currentPage - 1}`}>{"<<"}</Link>
            </li>
          )}
          {Array.from({
            length: 5,
          }).map((_, index) => {
            let indexOffset = 2
            let pageNumber

            if (pageInfo.currentPage > indexOffset) {
              pageNumber = pageInfo.currentPage + index - indexOffset
            } else {
              pageNumber = index + 1
            }
            return (
              <li className="mx-8">
                <Link to={pageNumber === 1 ? `/blog` : `/blog/${pageNumber}`}>
                  {pageNumber}
                </Link>
              </li>
            )
          })}
          {pageInfo.hasNextPage && (
            <li className="mx-8">
              <Link to={`/blog/${pageInfo.currentPage + 1}`}>{">>"}</Link>
            </li>
          )}
        </ul>
      </footer>
    </div>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!, $filter: ContentfulBlogPostFilterInput) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: $limit
      skip: $skip
      filter: $filter
    ) {
      edges {
        node {
          id
          preamble {
            childMarkdownRemark {
              html
            }
          }
          publishDate
          socialImage {
            file {
              url
            }
          }
          tags
          title
          urlSegment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageCount
        currentPage
      }
    }
    contentfulIcon(title: { eq: "Feather Quill" }) {
      id
      svg {
        svg
      }
    }
  }
`
