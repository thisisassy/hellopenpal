import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Postmark from "../ui/Postmark/postmark"

const IndexPage = ({ data }) => {
  const post = process.env.NODE_ENV === 'production' ? data.allMarkdownRemark.nodes.filter((value) => !value.frontmatter.draft) : data.allMarkdownRemark.nodes
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
          }
        }
      }
    }
  }
`
export default IndexPage