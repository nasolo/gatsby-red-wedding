import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../../styles/globalStyle"
import { MainWrapper } from "../layoutComponents"
import { Header } from '../header'
import Footer from "../footer"
import { Site, SiteContent, TopShadow, BottomShadow } from "./style"



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
            <TopShadow/>
            <SiteContent>
              {children}
            </SiteContent>
            <BottomShadow />
          </MainWrapper>
      </Site>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
