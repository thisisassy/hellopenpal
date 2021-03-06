import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/category.module.scss"

const Categories = ({ data, pageContext }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark
  const catHeading = `${category}`
  return (
    <Layout>
      <Seo pagetitle={catHeading} />
      <div className={styles.headArea}>
        <h2 className={styles.heading}>{catHeading}</h2>
      </div>
      <section>
        <ul>
          {edges.map(({ node }) => (
            <Link to={`/${node.frontmatter.slug}/`}>
              <article key={node.frontmatter.slug}>
                <h2>{node.frontmatter.title}</h2>
                <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
              </article>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
query($categories: String) {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {categories: {in: [$categories]}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
}
`
export default Categories