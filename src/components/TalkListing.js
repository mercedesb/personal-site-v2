import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { TalkListItem } from "components"

export function TalkListing() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTalkPage(sort: { fields: reverseSortOrder, order: DESC }) {
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
            reverseSortOrder
          }
        }
      }
    }
  `)

  // Dynamically select a complete class name so PurgeCSS won't remove it
  const getBorderColorClass = color => {
    let borderColor = "border-brown-900"
    if (color === "purple") {
      borderColor = "border-purple-500"
    } else if (color === "red") {
      borderColor = "border-red-500"
    } else if (color === "yellow") {
      borderColor = "border-yellow-500"
    } else if (color === "gray") {
      borderColor = "border-gray-500"
    } else if (color === "green") {
      borderColor = "border-green-500"
    }
    return borderColor
  }

  return (
    <div className="flex flex-wrap lg:-mr-48">
      {data.allContentfulTalkPage.edges.map(({ node }, index) => {
        return (
          <TalkListItem
            title={node.title}
            urlSegment={node.urlSegment}
            iconSvg={node.iconSvg ? node.iconSvg.svg.svg : ""}
            iconCssClass={node.iconCssClass}
            className={getBorderColorClass(node.color)}
            index={index}
          />
        )
      })}
    </div>
  )
}
