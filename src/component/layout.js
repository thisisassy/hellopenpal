import React from "react"

const Layout = (props) => {
  const children = props.children
  return (
    <div>
      <header>Hello Penpal!</header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout