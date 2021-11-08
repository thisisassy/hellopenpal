import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Seo = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitterUsername
        }
      }
    }
  `)
  const seo = data.site.siteMetadata

  const title = props.pagetitle
    ? `${props.pagetitle} | ${seo.title}`
    : seo.title
  const desc = props.desc || seo.description

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={seo.siteUrl} />
      <meta name="description" content={desc} />
      <meta property="ogi:url" content={seo.siteUrl} />
      <meta property="ogi:type" content="website" />
      <meta property="ogi:title" content={seo.title} />
      <meta property="ogi:description" content={desc} />
      {/* <meta property="ogi:image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={desc} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
    </Helmet>
  )
}

export default Seo