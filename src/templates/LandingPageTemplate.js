import React from "react"
import {
  ContactForm,
  CtaLinks,
  HtmlHead,
  SecondaryPageLayout,
  TalkListing,
} from "components"

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout
      title={page.title}
      backgroundIcon={page.iconSvg}
      renderAfterMain={() =>
        page.ctaLinks &&
        page.ctaLinks.length > 0 && (
          <aside className="w-full lg:w-auto lg:pl-8 lg:pr-32">
            <CtaLinks links={page.ctaLinks} />
          </aside>
        )
      }
    >
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
