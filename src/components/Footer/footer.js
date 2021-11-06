import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div>
        <li><Link to={`/about/`}>About</Link></li>
        <li><Link to={`/policy/`}>Policy</Link></li>
      </div>
      <div>
        <p><span>&copy;</span>{` `}Penpal with me 2021</p>
      </div>
    </footer>
  )
}

export default Footer