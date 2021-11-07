const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions, reporter } = gatsbyNodeHelpers
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(`
  {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY-MM-DD")
            draft
          }
        }
      }
    }
  }
  `)
  if (result.error) {
    reporter.paniOnBuild(`Error while running GraphQL query`)
    return
  }
  const posts = result.data.allMarkdownRemark.edges

  // blogPost
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPost,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}