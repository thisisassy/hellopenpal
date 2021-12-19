const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions, reporter } = gatsbyNodeHelpers
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const catTemplate = path.resolve(`./src/templates/categories.js`)

  const result = await graphql(`
  {
    posts: allMarkdownRemark(
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
    categories: allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
  `)
  if (result.error) {
    reporter.paniOnBuild(`Error while running GraphQL query`)
    return
  }
  const posts = result.data.posts.edges

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

  const categories = result.data.categories.group
  categories.forEach(category => {
    createPage({
      path: `/category/${category.fieldvalue}/`,
      component: catTemplate,
      context: {
        category: category.fieldvalue,
      },
    })
  })
}