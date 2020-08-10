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
    <div className="flex flex-wrap lg:-mr-48">
      {data.allContentfulTalkPage.edges.map(({ node }, index) => (
        <div
          className={`w-full md:w-1/2 lg:w-1/3 flex py-2 md:pr-3 ${
            index % 3 !== 0 ? "md:pl-3" : ""
          }`}
        >
          <Link
            className={`border-8 border-${node.color}-500  flex flex-col p-4 items-center no-underline justify-between w-full ${node.iconCssClass}`}
            to={`/speaking/${node.urlSegment}`}
          >
            <div
              className={`w-1/2 mt-4 mb-2`}
              dangerouslySetInnerHTML={{
                __html: node.iconSvg.svg.svg,
              }}
            ></div>
            <h3 className="text-xl lg:text-2xl text-center m-2">
              {node.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}
