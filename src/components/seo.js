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
    ? `${props.pagetitle} - ${seo.title}`
    : seo.title

  const desc = props.desc || seo.description

  const url = props.pagepath
    ? `${seo.siteUrl}${props.pagepath}`
    : seo.siteUrl

  const imgUrl = props.pageimg
    ? `${seo.siteUrl}${props.pageimg}`
    : `${seo.siteUrl}/ogimage.png`

  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={desc} />
      <meta property="ogi:url" content={url} />
      <meta property="ogi:type" content="website" />
      <meta property="ogi:title" content={seo.title} />
      <meta property="ogi:description" content={desc} />
      <meta property="ogi:image" content={imgUrl} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imgUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default Seo