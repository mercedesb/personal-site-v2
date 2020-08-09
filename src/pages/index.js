import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Nav, BlogListItem } from "components"
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
      <section className="px-16 py-8 w-2/3">
        <p className="text-2xl font-display mb-8">
          In my approach to software delivery and technical leadership, I learn
          everything I can about my client's and my team's goals to make an
          actionable plan and create opportunities to achieve those goals.
        </p>
        <p className="text-2xl font-display mb-8">
          I view my clients as partners and bring a unique blend of technical
          expertise, non-technical language, and empathetic insight to my work.
        </p>
        <p className="text-2xl font-display mb-8">
          As a leader, I strive to foster an environment where each individual’s
          unique set of strengths and ideas have space to grow and better the
          organization.
        </p>
      </section>
      <section className="px-16 py-8 w-4/5">
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
          <BlogListItem post={node} />
        ))}
        <div>
          <Link to="/blog">All blog posts</Link>
        </div>
      </section>
    </div>
  )
}
