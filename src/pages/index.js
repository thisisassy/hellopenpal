import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Postmark from "../ui/Postmark/postmark"
import * as styles from "../styles/index.module.scss"

const IndexPage = ({ data, location }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Seo pagepath={location.pathname} />
      <section className={styles.section}>
        <ul className={styles.picks}>
          {post.map(({ node }) => (
            <article className={styles.picksItem} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}/`}>
                <h2 className={styles.title}>{node.frontmatter.title}</h2>
                <p className={styles.date}><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
              </Link>
            </article>
          ))}
        </ul>
      </section>
      <div className={styles.postmark}><Postmark /></div>
    </Layout>
  )
}
export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
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