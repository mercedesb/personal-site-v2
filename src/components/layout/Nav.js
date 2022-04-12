import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DarkModeToggle } from "../DarkModeToggle"
import { DesktopNavigation, MobileNavigation } from "components"

export function Nav({ withBorder }) {
  const data = useStaticQuery(graphql`
    query {
      contentfulHome {
        contentfulchildren {
          id
          title
          urlSegment
          navTitle
        }
      }
      contentfulIcon(title: { eq: "Little Plant" }) {
        id
        svg {
          svg
        }
      }
    }
  `)

  return (
    <div>
      <div className="flex">
        <DarkModeToggle />
      </div>
      <DesktopNavigation
        withBorder={withBorder}
        links={data.contentfulHome.contentfulchildren}
        logoSvg={data.contentfulIcon.svg.svg}
      />
      <MobileNavigation
        links={data.contentfulHome.contentfulchildren}
        logoSvg={data.contentfulIcon.svg.svg}
      />
    </div>
  )
}
