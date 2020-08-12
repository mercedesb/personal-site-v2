import React from "react"
import { Nav, HtmlHead, RecentBlogPosts } from "components"

export default function HomePageTemplate({ pageContext: { page } }) {
  return (
    <div className="px-12 pt-4 md:pt-12 lg:px-24">
      <HtmlHead />
      <div className="lg:min-h-screen flex flex-col lg:justify-between lg:pb-12">
        <div>
          <Nav withBorder />
        </div>
        <div className="lg:py-8">
          <section className="flex items-end flex-wrap lg:flex-row-reverse">
            <img
              className="w-full pt-4 pb-12 px-8 sm:w-1/2 sm:mx-auto lg:pt-0 lg:mx-0 lg:w-1/3 lg:pb-0"
              src={page.mainImage.file.url}
              alt="Mercedes Bernard speaking"
            />
            <h2
              className="w-100 lg:w-2/3"
              dangerouslySetInnerHTML={{
                __html: page.preamble.childMarkdownRemark.html,
              }}
            ></h2>
          </section>
        </div>
      </div>

      <section className="pb-16 lg:pt-16">
        <div className="flex flex-wrap">
          <div
            className="w-full mt-4 text-xl font-display lg:w-1/2 lg:text-2xl lg:border-r lg:border-current lg:pr-12"
            dangerouslySetInnerHTML={{
              __html: page.mainContent.childMarkdownRemark.html,
            }}
          ></div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <RecentBlogPosts />
          </div>
        </div>
      </section>
    </div>
  )
}
