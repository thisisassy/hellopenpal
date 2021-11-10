import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
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
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <ul className={styles.nav}>
          <li><Link to={`/about/`}>About</Link></li>
          <li><Link to={`/contact/`}>Contact</Link></li>
          <li><Link to={`/policy/`}>Policy</Link></li>
        </ul>
        <p><span>&copy;{` `}{new Date().getFullYear()}</span>{` `}{siteTitle}</p>
      </div>
    </footer>
  )
}

export default Footer