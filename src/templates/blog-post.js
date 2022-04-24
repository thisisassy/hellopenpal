import React from "react"
import { graphql, Link } from "gatsby"
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
            <div className={styles.metaItem}>
              <p><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
              <span>{post.frontmatter.categories}</span>
            </div>
          </header>
          <div className={styles.entryContent}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
        <div>
          <p><Link href={'/'}>カテゴリートップにもどる</Link></p>
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
        categories
      }
      tableOfContents
    }
  }`

export default BlogPost