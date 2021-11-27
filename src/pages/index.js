import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.scss"

const IndexPage = ({ data, location }) => {
  const post = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Seo pagetitle="海外文通のはじめかた"
        pagepath={location.pathname} />
      <div className={styles.topHeading}>
        <div className={styles.container}>
          <h2>Hello penpals</h2>
          <p>This website is portal site for people who love letter &amp; postcards.</p>
        </div>
      </div>
      <section className={styles.section}>
        <h3 className={styles.heading}>Penpal / 海外文通のはじめかた</h3>
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
          }
        }
      }
    }
  }
`
export default IndexPage