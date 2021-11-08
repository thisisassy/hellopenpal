import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Header/index.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  const siteTitle = data.site.siteMetadata.title
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.title}><Link to={`/`}>{siteTitle}</Link></h1>
      </div>
    </header>
  )
}

export default Header