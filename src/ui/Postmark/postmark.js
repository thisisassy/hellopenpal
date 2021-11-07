import React from "react";
import * as styles from "../Postmark/index.module.scss"

const Postmark = () => {
  return (
    <div className={styles.postmark}>{new Date().getFullYear()}.{new Date().getMonth() + 1}.{new Date().getDate()}</div>
  )
}

export default Postmark