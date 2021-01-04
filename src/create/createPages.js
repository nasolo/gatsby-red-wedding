const pageTemplate = require.resolve('../template/pages')

const bannerFragment = `
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
            ...GatsbyImageSharpFluid
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



const GET_PAGES = `
query pageQuery {
  allWpPage {
    edges {
      node {
        uri
        title
        slug
        id
        pageBlocks {
          fieldGroupName
          pageBlockFields {
            ... on WpPage_Pageblocks_PageBlockFields_Banner {
              fieldGroupName
              pageBanner {
                ... on WpBanner {
                  ...WpBannerFragment
                }
              }
            }
          }
        }
      }
    }
  }
}

${bannerFragment}

`

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.

module.exports = async ({graphql, actions, reporter}) => {

        /** This is the method from Gatsby that we're going
        * to use to create pages in our static site. */
        const { createPage } = actions

        const fetchPages = async () =>{
            const result = await graphql(GET_PAGES)

            //handle errors
            if(result.error) {
                reporter.panicOnBuild(`Error while running GraphQL.`)
                return 
            }

            return result

        }

         /** Kick off our `fetchPages` method which will get us all
        * the pages we need to create individual pages. */
        await fetchPages().then(({ data }) => {
            
            data.allWpPage.edges.forEach(({node}) => {

                let pagePath = `${node.uri}`

                if(node.isFrontPage){
                    pagePath ='/'
                }

                createPage({
                    path: pagePath,
                    component: pageTemplate,
                    context:{
                        page: node
                    }

                })

                reporter.info(`page created: ${pagePath}`)

            })

        })


}