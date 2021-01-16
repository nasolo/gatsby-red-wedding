import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles/globalStyle"
import { MainWrapper } from "../layoutComponents"
import { Header } from '../header'
import { Site, SiteContent } from "./style"



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
      <Site>
        <GlobalStyle />
          <MainWrapper>
            <Header />
            
            <SiteContent>
              {children}
            </SiteContent>
            
          </MainWrapper>
      </Site>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
