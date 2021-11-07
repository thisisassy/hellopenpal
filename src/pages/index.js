import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Postmark from "../ui/Postmark/postmark"

const IndexPage = ({ data }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Seo />
      <section>
        {post.map(({ node }) => (
          <article key={node.frontmatter.slug}>
            <Link to={`/${node.frontmatter.slug}/`}>
              <h2>{node.frontmatter.title}</h2>
              <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
            </Link>
          </article>
        ))}
      </section>
      <Postmark />
    </Layout>
  )
}
export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
`
export default IndexPage