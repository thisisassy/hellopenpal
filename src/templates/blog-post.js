import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo pagetitle={post.frontmatter.title} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
      tableOfContents
    }
  }`

export default BlogPost