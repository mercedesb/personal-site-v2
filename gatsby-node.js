const path = require("path")
const dayjs = require("dayjs")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const ArrayUtils = require("./src/utils/array")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const filterDate = dayjs().format("YYYY-MM-DD")

  const result = await graphql(`
    query {
      contentfulHome {
        title
        preamble {
          preamble
          childMarkdownRemark {
            html
          }
        }
        mainContent {
          childMarkdownRemark {
            html
          }
        }
        mainImage {
          file {
            url
          }
        }
      }
      allContentfulLandingPage {
        edges {
          node {
            id
            title
            navTitle
            preamble {
              preamble
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
            ctaLinks {
              ... on ContentfulLandingPage {
                id
                urlSegment
                navTitle
                title
              }
              ... on ContentfulCtaLink {
                id
                title
                internalLink {
                  urlSegment
                }
                externalLink
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
            canonicalUrl
          }
        }
      }
      allContentfulTalkPage {
        edges {
          node {
            id
            title
            mainContent {
              childMarkdownRemark {
                html
              }
            }
            givenAt {
              title
              date
              slidesLink {
                file {
                  url
                }
              }
              links {
                name
                href
              }
            }
            iconSvg {
              svg {
                svg
              }
            }
            iconCssClass
            color
            urlSegment
          }
        }
      }
      contentfulLandingPage(title: { eq: "Blog" }) {
        id
        title
        navTitle
        preamble {
          preamble
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
        urlSegment
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create home page
  const homePage = result.data.contentfulHome
  createPage({
    path: "/",
    component: require.resolve(`./src/templates/HomePageTemplate.js`),
    context: { page: homePage },
  })

  // Create landing pages
  const landingPages = result.data.allContentfulLandingPage.edges
  landingPages.forEach(({ node }) => {
    createPage({
      path: `/${node.urlSegment}`,
      component: require.resolve(`./src/templates/LandingPageTemplate.js`),
      context: { page: node },
    })
  })

  const blogListPage = result.data.contentfulLandingPage
  const blogPosts = result.data.allContentfulBlogPost.edges.map(e => e.node)
  const blogTags = ArrayUtils.flatten(blogPosts.map(node => node.tags))
  const postsPerPage = parseInt(process.env.GATSBY_BLOG_POST_PAGE_SIZE, 10)
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
        page: blogListPage,
      },
    })
  })

  // Create blog list pages for each category
  blogTags.forEach(tag => {
    const matchingPosts = blogPosts.filter(
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
          page: blogListPage,
        },
      })
    })
  })

  // Create a blog post page for each post
  blogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.urlSegment}`,
      component: require.resolve(`./src/templates/BlogPostTemplate.js`),
      context: { post },
    })
  })

  // Create a page for each talk
  const talkPages = result.data.allContentfulTalkPage.edges
  talkPages.forEach(({ node }) => {
    createPage({
      path: `/speaking/${node.urlSegment}`,
      component: require.resolve(`./src/templates/TalkPageTemplate.js`),
      context: { page: node },
    })
  })
}
