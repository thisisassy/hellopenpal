import React from "react"
import { Link } from "gatsby"
import * as styles from "../Header/index.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.title}><Link to={`/`}>Penpal with me</Link></h1>
      </div>
    </header>
  )
}

export default Header