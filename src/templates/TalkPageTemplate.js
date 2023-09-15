import React from "react"
import { DateUtils } from "utils"
import { SecondaryPageLayout, HtmlHead, Link } from "components"

export function Head({ pageContext: { page } }) {
  return (
    <HtmlHead
      title={page.title}
      description={`Find resources for Mercedes Bernard's ${page.title} talk`}
      path={`speaking/${page.urlSegment}`}
    />
  )
}

export default function TalkPageTemplate({ pageContext: { page } }) {
  return (
    <SecondaryPageLayout title={page.title} backgroundIcon={page.iconSvg}>
      <div
        dangerouslySetInnerHTML={{
          __html: page.mainContent.childMarkdownRemark.html,
        }}
      ></div>
      {page.givenAt &&
        page.givenAt
          .sort(event => event.date)
          .reverse()
          .map(event => (
            <div className="mt-12" key={event.date}>
              <h3 className="mb-2">{event.title}</h3>
              <div className="">
                {event.slidesLink && (
                  <Link
                    className="border-r-2 mr-2 pr-2"
                    to={event.slidesLink.file.url}
                  >
                    Slides
                  </Link>
                )}
                {event.links.map(link => (
                  <Link
                    className="border-r-2 mr-2 pr-2"
                    key={link.href}
                    to={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
                <em>{DateUtils.format(event.date)}</em>
              </div>
            </div>
          ))}
    </SecondaryPageLayout>
  )
}
