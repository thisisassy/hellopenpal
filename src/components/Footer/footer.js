import React from "react"
import { Link } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__outer}>
        <li><Link to={`/about/`}>About</Link></li>
        <li><Link to={`/policy/`}>Policy</Link></li>
      </div>
      <div className={styles.footer__inner}>
        <p><span>&copy;</span>{` `}Penpal with me 2021</p>
      </div>
    </footer>
  )
}

export default Footer