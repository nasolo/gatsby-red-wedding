module.exports.WpBannerFragment = `
    fragment WpBannerFragment on WpBanner {
      uri
      title
      slug
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
      page_banners {
        fieldGroupName
        heading
        overview
        subHeading
      }
    }
  `


exports.SeoFragment = `
fragment WpPostTypeSEOFragment on WpPostTypeSEO {
    focuskw
    cornerstone
    metaDesc
    metaKeywords
    opengraphAuthor
    opengraphDescription
    opengraphSiteName
    opengraphTitle
    opengraphType
    opengraphUrl
    opengraphPublisher
    canonical
    title
    twitterDescription
     opengraphImage {
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
    twitterImage {
      localFile {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
    
`