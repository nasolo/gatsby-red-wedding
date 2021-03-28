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


const blockSwitch = (block, key) => {

    switch (key) {
        case GALLERY:
            
            return parseGalleryNode(block)

        case BANNER:

            return parseBannerNode(block)

        default:
            return block
    }
}



export const getPageBlocks = blocks => {

    if(!blocks instanceof Array) return false
    const blockFieldKeys = Object.keys(PAGE_BLOCKS)
    
    
    const pageBlocks = blockFieldKeys.reduce((obj, val) =>{
        
        let key = PAGE_BLOCKS[val]       
        let filteredBlocks = blocks.filter(val => val.fieldGroupName === key)

        if(!obj[key]){
            obj[key] = []
        }

        obj[key] = blockSwitch(filteredBlocks, key)
        
        return obj

    },{})

    return pageBlocks
    
}