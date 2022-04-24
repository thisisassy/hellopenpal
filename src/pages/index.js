import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LatestArticles from "../components/LatestArticles"
import * as styles from "../styles/index.module.scss"

const IndexPage = ({ data, location }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Seo pagetitle="海外文通のはじめかた"
        pagepath={location.pathname} />
      <section className={styles.section}>
        <LatestArticles />
      </section>
      <section className={styles.section}>
        <ul className={styles.picks}>
          {post.map(({ node }) => (
            <Link className={styles.link} to={`/${node.frontmatter.slug}/`}>
              <article className={styles.picksItem} key={node.frontmatter.slug}>
                <h2 className={styles.title}>{node.frontmatter.title}</h2>
                <p className={styles.date}><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
              </article>
            </Link>
          ))}
        </ul>
      </section>
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
            categories
          }
        }
      }
    }
  }
`
export default IndexPage