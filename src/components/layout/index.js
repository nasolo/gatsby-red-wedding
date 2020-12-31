import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles/globalStyle"
import { MainWrapper } from "../layoutComponents"
import Header from "../header"
import Footer from "../footer"



export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle />
        <MainWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </MainWrapper>
    </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
