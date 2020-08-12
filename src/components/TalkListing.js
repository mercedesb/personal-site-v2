import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TalkListItem } from "components"

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
      {data.allContentfulTalkPage.edges.map(({ node }, index) => {
        const className = `border-${node.color}-500`
        return (
          <TalkListItem
            title={node.title}
            urlSegment={node.urlSegment}
            iconSvg={node.iconSvg ? node.iconSvg.svg.svg : ""}
            iconCssClass={node.iconCssClass}
            className={className}
            index={index}
          />
        )
      })}
    </div>
  )
}
