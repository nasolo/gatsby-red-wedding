import React from 'react'
import { Banner } from '../../modules'
import ErrorComponent from '../../modules/defaultComponent'
import { PAGE_BLOCKS } from '../../constants/blocks'
import { PageSection } from '../style';



const Page = ({pageContext:{ page, page: {
    pageBlocks: { pageBlockFields }
}} }) => {

    const { BANNER, GALLERY } = PAGE_BLOCKS

    const isEmpty = arr => {
        if(arr === undefined || !arr instanceof Array) return false

        return arr.length < 1
    }

    const componentSwitch = ( key, block ) => {
        switch (key){
            case BANNER:
                return <Banner blocks={block} page={page} key={BANNER}/>
            case GALLERY:
                return 
            default: 
                return <ErrorComponent {...page} key={GALLERY}/>
        }
    }


    const renderComponent = () =>{
        const blocks = {
            [BANNER]: pageBlockFields.filter(block => block.fieldGroupName === BANNER),
            [GALLERY]: pageBlockFields.filter(block => block.fieldGroupName === GALLERY)
        }

    const getBlock = key => {
        if(key === undefined) return
        return blocks[key]
    }

       return Object.keys(blocks).map(key =>{
           let block = getBlock(key)
            return !isEmpty(block) && componentSwitch(key, block)
        })
        
    }


    return (
        <PageSection>
                {renderComponent()}
        </PageSection>
    )
 

}  


export default Page