import React from 'react'
import Banner from '../../modules/banner'
import ErrorComponent from '../../modules/defaultComponent'
import { PAGE_BLOCKS } from '../../constants/blocks'



const Page = ({pageContext }) => {

    //extract ACF block fields from context
    const { page,
            page:{
                    pageBlocks: { 
                        pageBlockFields 
                    } 
                }
        } = pageContext
    const { BANNER } = PAGE_BLOCKS


    //component selector
    const BlockComponent = (block) => {
        switch(pageBlockFields.fieldGroupName){
            case BANNER:
                return <Banner {...block}/>;
            default:
                return <ErrorComponent {...block}/>
        }
    }


    //if blocks fields exist loop through and render component
    if(pageBlockFields) {
        return pageBlockFields.map(block => BlockComponent())
    }else {
        return <ErrorComponent {...page}/>
    }

}  


export default Page