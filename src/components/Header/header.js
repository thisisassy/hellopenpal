import React from "react"
import * as styles from "../Header/index.module.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header__inner}>
        <h1 className={styles.title}>Penpal with me</h1>
      </div>
    </header>
  )
}

export default Header