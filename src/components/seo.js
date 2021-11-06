import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Seo = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          url
          twitterUsername
        }
      }
    }
  `)
  const seo = data.site.siteMetadata
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta property="ogi:url" content={seo.url} />
      <meta property="ogi:type" content="website" />
      <meta property="ogi:title" content={seo.title} />
      <meta property="ogi:description" content={seo.description} />
      {/* <meta property="ogi:image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
    </Helmet>
  )
}

export default Seo