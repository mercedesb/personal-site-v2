import React from "react"
import { graphql } from "gatsby"
import {
  BaseLayout,
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
    <BaseLayout
      title={page.title}
      renderAfterMain={() => (
        <aside className="border-l border-current border-opacity-50 pl-8 pr-32 sticky top-0 relative">
          <BlogListCategories path={location.pathname} />
        </aside>
      )}
      renderFooter={() => <BlogListPageNumbers {...pageInfo} />}
    >
      <React.Fragment>
        <HtmlHead
          title={page.title}
          description={page.preamble.preamble}
          path={page.urlSegment}
        />
        {blogPosts.map(({ node }, index) => {
          return <BlogListItem post={node} />
        })}
      </React.Fragment>
    </BaseLayout>
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
