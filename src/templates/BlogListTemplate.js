import React from "react"
import {
  BaseLayout,
  BlogListItem,
  BlogListCategories,
  BlogListPageNumbers,
  BlogSearch,
  HtmlHead,
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

export default function BlogListTemplate({
  location,
  pageContext: { page, blogPosts, pageInfo },
}) {
  return (
    <BaseLayout
      title={page.title}
      renderAfterMain={() => (
        <aside className="w-full sticky top-0 relative bg-brown-100 pb-8 lg:w-auto lg:border-l lg:border-current lg:pl-8 lg:pr-32 dark:bg-brown-900">
          <BlogSearch />
          <BlogListCategories path={location.pathname} />
        </aside>
      )}
      renderFooter={() => (
        <BlogListPageNumbers {...pageInfo} path={location.pathname} />
      )}
    >
      <React.Fragment>
        {blogPosts.map(post => {
          return <BlogListItem key={post.id} post={post} />
        })}
      </React.Fragment>
    </BaseLayout>
  )
}
