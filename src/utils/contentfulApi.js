import qs from "qs"
import dayjs from "dayjs"

const baseUrl = `https://${process.env.GATSBY_CONTENTFUL_HOST}/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries`
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
}

async function fetchData({ path, method, data, headers }) {
  const response = await fetch(path, {
    method: method,
    body: !!data ? JSON.stringify(data) : null,
    headers: !!headers ? headers : null,
  })

  return response.json()
}

export default function useContentful() {
  return {
    searchBlogPosts: async query => {
      const filterDate = dayjs().format("YYYY-MM-DD")

      const queryParams = {
        content_type: "blogPost",
        "fields.publishDate[lte]": filterDate,
        "fields.mainContent[match]": `"${query}"`,
      }

      const matchingBlogs = await fetchData({
        path: `${baseUrl}?${qs.stringify(queryParams)}`,
        method: "GET",
        headers: headers,
      })

      return matchingBlogs
    },
  }
}
