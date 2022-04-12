import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BlogListItem, Link } from "components"

export function RecentBlogPosts() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishDate, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            preamble {
              childMarkdownRemark {
                html
              }
            }
            mainContent {
              mainContent
            }
            publishDate
            tags
            title
            urlSegment
          }
        }
      }
      contentfulLandingPage(title: { eq: "Blog" }) {
        id
        iconSvg {
          svg {
            svg
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="flex items-end mb-8">
        <div
          className="w-16 text-brown-900 mr-4 dark:text-brown-100"
          dangerouslySetInnerHTML={{
            __html: data.contentfulLandingPage.iconSvg.svg.svg,
          }}
        ></div>
        <h2 className="my-0">Recent blog posts</h2>
      </div>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <BlogListItem post={node} key={node.id} />
      ))}
      <div className="mt-4">
        <Link to="/blog">
          <strong>All blog posts</strong>
        </Link>
      </div>
    </React.Fragment>
  )
}
