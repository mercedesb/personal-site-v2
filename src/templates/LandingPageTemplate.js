import React from "react"
import {
  ContactForm,
  SecondaryPageLayout,
  TalkListing,
  HtmlHead,
} from "components"

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout title={page.title} backgroundIcon={page.iconSvg}>
      <HtmlHead
        title={page.title}
        description={page.preamble.preamble}
        path={page.urlSegment}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: page.mainContent.childMarkdownRemark.html,
        }}
      ></div>
      {page.showTalks && <TalkListing />}
      {page.showContact && <ContactForm />}
    </SecondaryPageLayout>
  )
}
