import React from "react"
import { SecondaryPageLayout, TalkListing } from "components"

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout title={page.title} backgroundIcon={page.iconSvg}>
      <div
        dangerouslySetInnerHTML={{
          __html: page.mainContent.childMarkdownRemark.html,
        }}
      ></div>
      {page.showTalks && <TalkListing />}
    </SecondaryPageLayout>
  )
}
