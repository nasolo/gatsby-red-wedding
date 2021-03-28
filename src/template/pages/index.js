import React from 'react'
import { Banner, Gallery } from '../../modules'
import ErrorComponent from '../../modules/defaultComponent'
import { PAGE_BLOCKS } from '../../constants/blocks'
import { PageSection } from '../style';
import { getPageBlocks } from '../../utils'


const Page = ({pageContext:{ page, page: {
    pageBlocks: { pageBlockFields },
    gallery_filters_tags
}} }) => {


    console.log(gallery_filters_tags)
    
    const { BANNER, GALLERY } = PAGE_BLOCKS
    
    const acfBlocks = getPageBlocks(pageBlockFields)
 
    const isEmpty = arr => {
        if(arr === undefined || !arr instanceof Array) return true

        return arr.length < 1
    }

    const componentSwitch = ( key, block ) => {

        switch (key){
            case BANNER:
                return <Banner blocks={block} page={page} fieldName={BANNER} key={BANNER}/>
            case GALLERY: 
                return <Gallery filters={gallery_filters_tags} blocks={block} page={page} fieldName={GALLERY} key={GALLERY}/>
            default: 
                return <ErrorComponent {...page} key={GALLERY}/>
        }
    }


    const renderComponent = () => {
        
        const pageBlocks = []

        for(const prop in acfBlocks){
            if(!isEmpty(acfBlocks[prop])){
                pageBlocks.push(componentSwitch(prop, acfBlocks[prop]) )
            }

        }
        
        return pageBlocks

    }


    return (
        <PageSection>
                {renderComponent()}
        </PageSection>
    )
 

}  

//

export default Page