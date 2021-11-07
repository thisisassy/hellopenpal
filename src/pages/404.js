import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo pagetitle="ページが見つかりません" />
      <section>
        <h1>404 Not Found</h1>
        <p>Sorry, Page not found.</p>
      </section>
    </Layout>
  )
}

export default NotFoundPage