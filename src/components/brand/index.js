import React from 'react'
import { Link, useStaticQuery,  graphql } from "gatsby"
import Img from "gatsby-image"

const LogoQuery = graphql`

query logoQuery {
    wp {
      seo {
        schema {
          logo {
            localFile {
              childImageSharp {
                fixed{
                    ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
  

`

export const Brand = (data) => {

    const { wp: { seo } } = useStaticQuery(LogoQuery)

    const alt = seo.schema.companyName
    const src = seo.schema.logo.localFile.childImageSharp.fixed

    return (
        <Link to="/">
            <Img fixed={src} alt={alt}/>
        </Link>
    )
}