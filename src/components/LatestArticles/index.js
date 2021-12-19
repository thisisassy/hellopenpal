import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../LatestArticles/index.module.scss"

const LatestArticles = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`)
  const latest = data.allMarkdownRemark.edges
  return (
    <>
      <h3 className={styles.heading}>最新記事</h3>
      <ul className={styles.articleList}>
        {latest.map(({ node }) => (
          <li>
            <Link to={`/${node.frontmatter.slug}/`}>
              <article className={styles.article} key={node.frontmatter.slug}>
                <p className={styles.date}><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                <h2 className={styles.title}>{node.frontmatter.title}</h2>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default LatestArticles