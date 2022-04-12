import React, { useState, useEffect } from "react"
import {
  SecondaryPageLayout,
  BlogListItem,
  BlogSearch,
  HtmlHead,
  MagnifyingGlass,
} from "components"
import { useContentful } from "utils"
import { useLocation } from "@reach/router"
import qs from "qs"

export default function Search() {
  const { searchBlogPosts } = useContentful()
  const location = useLocation()

  const [query, setQuery] = useState("")
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    if (location.search) {
      const queryParams = qs.parse(location.search.substring(1))
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
  }, [location.search]) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SecondaryPageLayout title="Search" backgroundIcon={MagnifyingGlass}>
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

        {blogPosts.length === 0 && <p>Sorry, no matching blog posts found.</p>}

        {blogPosts.length > 0 &&
          blogPosts.map((post, index) => {
            return <BlogListItem key={post.id} post={post} />
          })}
      </React.Fragment>
    </SecondaryPageLayout>
  )
}
