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
        <aside className="w-full sticky top-0 relative bg-brown-100 pb-8 lg:w-auto lg:border-l lg:border-current lg:pl-8 lg:pr-32 dark:bg-brown-900">
          <BlogListCategories path={location.pathname} />
        </aside>
      )}
      renderFooter={() => (
        <BlogListPageNumbers {...pageInfo} path={location.pathname} />
      )}
    >
      <React.Fragment>
        <HtmlHead
          title={page.title}
          description={page.preamble ? page.preamble.preamble : null}
          path={page.urlSegment}
        />
        {blogPosts.map(({ node }, index) => {
          return <BlogListItem key={node.id} post={node} />
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
