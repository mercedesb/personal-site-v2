import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Nav, BlogListItem, HtmlHead } from "components"
import headshot from "../assets/headshot.png"

export default function Home() {
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
      contentfulIcon(title: { eq: "Feather Quill" }) {
        id
        svg {
          svg
        }
      }
    }
  `)

  return (
    <div>
      <HtmlHead />
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Nav />
        </div>
        <div className="px-16 py-8">
          <section className="flex items-end">
            <h2 className="text-5xl w-2/3">
              Values-driven, growth-oriented software engineering leader
              passionate about coaching and creating opportunity
            </h2>
            <img
              className="w-1/3 px-8"
              src={headshot}
              alt="Mercedes Bernard speaking"
            />
          </section>
        </div>
      </div>

      <section className="px-16 pt-8 pb-16 w-4/5">
        <div className="flex items-end mb-8">
          <div
            className="w-16 text-brown-900 mr-4"
            dangerouslySetInnerHTML={{
              __html: data.contentfulIcon.svg.svg,
            }}
          ></div>
          <h3 className="my-0 text-4xl">Recent blog posts</h3>
        </div>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogListItem post={node} key={node.id} />
        ))}
        <div className="mt-4">
          <Link to="/blog">
            <strong>All blog posts {">>"}</strong>
          </Link>
        </div>
      </section>
    </div>
  )
}
