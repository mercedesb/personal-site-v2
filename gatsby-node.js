const path = require("path")
const moment = require("moment")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const _ = require("lodash")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const filterDate = moment().format("YYYY-MM-DD")

  const result = await graphql(`
    query {
      allContentfulLandingPage {
        edges {
          node {
            id
            title
            navTitle
            preamble {
              childMarkdownRemark {
                html
              }
            }
            mainContent {
              childMarkdownRemark {
                html
              }
            }
            iconSvg {
              svg {
                svg
              }
            }
            showBlogPosts
            showTalks
            showContact
            urlSegment
          }
        }
      }
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            title
            preamble {
              preamble
              childMarkdownRemark {
                html
              }
            }
            mainContent {
              mainContent
              childMarkdownRemark {
                html
              }
            }
            publishDate
            updatedAt
            socialImage {
              file {
                url
              }
            }
            tags
            urlSegment
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create landing pages
  const landingPages = result.data.allContentfulLandingPage.edges
  landingPages.forEach(({ node }) => {
    createPage({
      path: `/${node.urlSegment}`,
      component: require.resolve(`./src/templates/LandingPageTemplate.js`),
      context: { page: node },
    })
  })

  const blogPosts = result.data.allContentfulBlogPost.edges
  const blogNodes = blogPosts.map(edge => edge.node)
  const blogTags = _.flatten(blogNodes.map(node => node.tags))
  const postsPerPage = parseInt(process.env.BLOG_POST_PAGE_SIZE, 10)
  let numPages = Math.ceil(blogPosts.length / postsPerPage)

  // Create blog list pages for page numbers
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/BlogListTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        filter: { publishDate: { lte: filterDate } },
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create blog list pages for each category
  blogTags.forEach(tag => {
    const matchingPosts = blogNodes.filter(
      node => node.tags && node.tags.includes(tag)
    )
    numPages = Math.ceil(matchingPosts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/${tag}` : `/blog/${tag}/${i + 1}`,
        component: path.resolve("./src/templates/BlogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          filter: { publishDate: { lte: filterDate }, tags: { glob: tag } },
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  // Create a blog post page for each post
  blogNodes.forEach(post => {
    createPage({
      path: `/blog/${post.urlSegment}`,
      component: require.resolve(`./src/templates/BlogPostTemplate.js`),
      context: { post },
    })
  })
}
