import React, { useState, useEffect } from "react"
import { BaseLayout, BlogListItem, BlogSearch, HtmlHead } from "components"
import { useContentful } from "utils"
import qs from "qs"

export default function Search() {
  const { searchBlogPosts } = useContentful()

  const [query, setQuery] = useState("")
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    if (window.location.search) {
      const queryParams = qs.parse(window.location.search.substring(1))
      const searchTerm = queryParams["q"]
      setQuery(searchTerm)

      searchBlogPosts(searchTerm).then(data => {
        setBlogPosts(
          data.items.map(item => ({
            ...item.fields,
            id: item.sys.id,
          }))
        )
      })
    }
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BaseLayout title="Search">
      <React.Fragment>
        <HtmlHead
          title="Search"
          description="Search blog posts for something specific"
          path="/blog/search"
        />
        <BlogSearch />
        {!!query && (
          <h3 className="font-body">
            Blog posts matching <span className="font-bold">"{query}"</span>
          </h3>
        )}

        {blogPosts.map((post, index) => {
          return <BlogListItem key={post.id} post={post} />
        })}
      </React.Fragment>
    </BaseLayout>
  )
}
