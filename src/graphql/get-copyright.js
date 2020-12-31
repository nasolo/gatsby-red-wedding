import { useStaticQuery, graphql } from 'gatsby'

export const useGetCopyrightNotice = () => {

    let defaultMsg = "All Rights Reserved. Unauthorized Duplication prohibited"

    const { wpPage: { copyright } } = useStaticQuery(graphql`
    query MyQuery {
        wpPage {
          copyright {
            copyrightNotice
            fieldGroupName
          }
        }
      }
      
    `
    )

    return copyright.copyrightNotice === null 
    ? {
        ...copyright,
        copyrightNotice: defaultMsg
    } 
    : copyright
}