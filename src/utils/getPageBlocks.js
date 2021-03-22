import { PAGE_BLOCKS } from '../constants/blocks'
import { getFluidImage } from './getFluidImage'

const { BANNER, GALLERY } = PAGE_BLOCKS

const parseBannerNode = node => {
    
        return node.map(({pageBanner}, i) => {
            
        let { 
                page_banners, 
                featuredImage,
                slug,
                title,
                uri
            } = pageBanner
        let fluid = getFluidImage(featuredImage)

        return {
            ...page_banners,
            fluid,
            slug,
            title,
            uri
        }

    })
}


const parseGalleryNode = node => {

    const galleryNodes = []

    node.map(({ gallery }) => 
        gallery.page_galleries.gallery
            .forEach(node => galleryNodes.push(node))
    )

    return galleryNodes

}




export const getPageBlocks = blocks => {

    if(!blocks instanceof Array) return false
    const blockFieldKeys = Object.keys(PAGE_BLOCKS)
    const pageBlocks = []

    
    const filterBlockFields = fieldGroupName => blocks.filter(block => block.fieldGroupName === fieldGroupName)
    const filteredBlockFields = blockFieldKeys.map(block => filterBlockFields(PAGE_BLOCKS[block]))
    
    filteredBlockFields.forEach((block, i) => {
    
    })

    

    return pageBlocks

    

    
}