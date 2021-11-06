import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import "../styles/global.scss"

const Layout = (props) => {
  const children = props.children
  return (
    <div className={`wrapper`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout