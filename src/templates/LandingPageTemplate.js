import React from "react"
import {
  ContactForm,
  CtaLinks,
  HtmlHead,
  SecondaryPageLayout,
  TalkListing,
  NewsletterSignup,
} from "components"

export function Head({ pageContext: { page } }) {
  return (
    <HtmlHead
      title={page.title}
      description={page.preamble ? page.preamble.preamble : null}
      path={page.urlSegment}
    />
  )
}

export default function LandingTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout
      title={page.title}
      backgroundIcon={page.iconSvg}
      renderAfterMain={() =>
        page.ctaLinks &&
        page.ctaLinks.length > 0 && (
          <aside className="w-full pb-8 lg:w-auto lg:pl-8 lg:pr-32">
            <CtaLinks links={page.ctaLinks} />
          </aside>
        )
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: page.mainContent.childMarkdownRemark.html,
        }}
      ></div>
      {page.showTalks && <TalkListing />}
      {page.showContact && <ContactForm />}
      {page.showNewsletterSignup && <NewsletterSignup />}
    </SecondaryPageLayout>
  )
}
