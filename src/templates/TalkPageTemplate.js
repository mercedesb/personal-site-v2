import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import { SecondaryPageLayout } from "components"

export default function TalkPageTemplate({ pageContext: { page } }) {
  debugger
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
            <div className="mt-12">
              <h3 className="mb-2">{event.title}</h3>
              <div className="">
                {event.slidesLink && (
                  <Link
                    className="border-r-2 mr-4 pr-4"
                    to={event.slidesLink.file.url}
                  >
                    Slides
                  </Link>
                )}
                {event.links.map(link => (
                  <Link
                    className="border-r-2 mr-4 pr-4"
                    key={link.href}
                    to={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
                <em>{moment(event.date).format("MMMM DD, YYYY")}</em>
              </div>
            </div>
          ))}
    </SecondaryPageLayout>
  )
}
