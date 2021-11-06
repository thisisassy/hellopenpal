import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

const IndexPage = () => {
  return (
    <Layout>
      contents here...
      <Link to={`/about/`}>About</Link>
    </Layout>
  )
}

export default IndexPage