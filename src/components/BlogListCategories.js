import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"

export function BlogListCategories({ path }) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)
  const tags = [
    ...new Set(
      _.flatten(
        _.compact(data.allContentfulBlogPost.edges.map(edge => edge.node.tags))
      )
    ),
  ].sort()

  return (
    <div className="sticky top-0">
      <h4>Categories</h4>
      <ul className="flex flex-wrap lg:flex-col">
        <li
          className={`mb-2 ${decodeURI(path) === "/blog" ? "font-bold" : ""}`}
        >
          <Link to={`/blog`} className="mx-2 lg:mx-0 lg:no-underline">
            All
          </Link>
        </li>
        {tags.map(tag => {
          let to = `/blog/${tag}`

          return (
            <li
              className={`mb-2 ${decodeURI(path).match(to) ? "font-bold" : ""}`}
              key={tag}
            >
              <Link to={to} className="mx-2 lg:mx-0 lg:no-underline">
                {tag}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
