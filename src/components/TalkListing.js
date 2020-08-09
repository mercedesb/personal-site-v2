import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export function TalkListing() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTalkPage(sort: { fields: updatedAt, order: DESC }) {
        edges {
          node {
            id
            title
            iconSvg {
              svg {
                svg
              }
            }
            iconCssClass
            color
            urlSegment
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-wrap">
      {data.allContentfulTalkPage.edges.map(({ node }) => (
        <div className="w-1/3 flex">
          {/* className={`bg-${node.color}-500 text-white flex flex-col p-4 m-4 items-center no-underline justify-between w-full`} */}

          <Link
            className={`border-8 border-${node.color}-500  flex flex-col p-4 m-4 items-center no-underline justify-between w-full ${node.iconCssClass}`}
            to={`/speaking/${node.urlSegment}`}
          >
            <div
              className={`w-1/3 mt-4 mb-2`}
              dangerouslySetInnerHTML={{
                __html: node.iconSvg.svg.svg,
              }}
            ></div>
            <h3 className="text-2xl text-center m-2">{node.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}
