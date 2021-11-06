import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"

const Layout = (props) => {
  const children = props.children
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout