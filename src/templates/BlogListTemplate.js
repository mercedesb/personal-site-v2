import React from "react"
import { graphql } from "gatsby"
import {
  Nav,
  BlogListItem,
  BlogListCategories,
  BlogListPageNumbers,
  HtmlHead,
} from "components"

export default function BlogListTemplate({
  data,
  location,
  pageContext: { page },
}) {
  const blogPosts = data.allContentfulBlogPost.edges
  const pageInfo = data.allContentfulBlogPost.pageInfo

  return (
    <div>
      <HtmlHead
        title={page.title}
        description={page.preamble.preamble}
        path={page.urlSegment}
      />
      <div>
        <Nav />
      </div>
      <div className="relative">
        <header className="flex items-end px-16">
          <h2 className="my-0 text-6xl">Blog</h2>
        </header>
        <div className="flex justify-between">
          <main className="px-16 py-8 w-2/3">
            {blogPosts.map(({ node }, index) => {
              return <BlogListItem post={node} />
            })}
          </main>
          <aside className="border-l border-current border-opacity-50 pl-8 pr-32 sticky top-0 relative">
            <BlogListCategories path={location.pathname} />
          </aside>
        </div>
      </div>
      <footer>
        <BlogListPageNumbers {...pageInfo} />
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
          title
          preamble {
            childMarkdownRemark {
              html
            }
          }
          mainContent {
            mainContent
          }
          publishDate
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
  }
`
