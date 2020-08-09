import React from "react"
import { SecondaryPageLayout } from "components"

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout title={page.title} backgroundIcon={page.iconSvg}>
      <div
        dangerouslySetInnerHTML={{
          __html: page.mainContent.childMarkdownRemark.html,
        }}
      ></div>
    </SecondaryPageLayout>
  )
}
