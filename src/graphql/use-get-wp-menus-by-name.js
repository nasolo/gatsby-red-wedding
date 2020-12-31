import { useStaticQuery, graphql } from "gatsby"

export const useWpMenues = (slug) => {

    const { allWpMenu: { nodes } } = useStaticQuery(graphql`
    query WpMenusQuery {
        allWpMenu {
            nodes {
                slug
                menuItems {
                    nodes {
                    url
                    id
                    label
                    order
                }
            }
        }
    }
}
`
)

if(slug === undefined){
    return nodes
}else {
    if(nodes === undefined){
        return []
    }
}


const menus = nodes.find(node => node.slug === slug)

return menus ? menus.menuItems.nodes : []

}