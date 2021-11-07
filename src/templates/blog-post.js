import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/post.module.scss"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo pagetitle={post.frontmatter.title} />
      <article className={styles.entry}>
        <div className={styles.entry__inner}>
          <header>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <p className={styles.date}><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
          </header>
          <div className={styles.entryContent}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!){
    markdownRemark(frontmatter: {slug: {eq: $slug}}
      ){
      html
      frontmatter {
        title
        slug
        date(formatString: "YYYY-MM-DD")
        draft
      }
      tableOfContents
    }
  }`

export default BlogPost