import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menubar from "./Menubar"
import Header from "./header"
import Back from "./background"
import Contents from "./contents"


import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Back/>
      <div className="flex">
        <div className="flex-left">
          <Menubar/>
        </div>
        <div className="flex-right">
          <Contents/>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
