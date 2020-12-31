import { useStaticQuery, graphql } from 'gatsby'


export const useSeoSocialLinks = () => {
    const { wp: { seo } } = useStaticQuery(graphql`
        query socialNetworkLinksQuery {
            wp {
            seo {
                    social {
                        facebook {
                            __typename
                            url
                        }
                        instagram {
                            __typename
                            url
                        }
                        linkedIn {
                            __typename
                            url
                        }
                        pinterest {
                            __typename
                            url
                            metaTag
                        }
                        twitter {
                            __typename
                            cardType
                            username
                        }
                        youTube {
                            __typename
                            url
                        }
                    }
                    
                }
            }
        }
    
    `)

    //if menu is not found end
    if(seo.social === undefined) return []

    //extract social network links
    const { social } = seo

    //add network key to returned data
    const socialKeys = Object.keys(social).map(key => ({
        ...social[key],
        network: key
    }))

 
    return socialKeys

}