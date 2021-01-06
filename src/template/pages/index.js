import React from 'react'
import Banner from '../../modules/banner'
import ErrorComponent from '../../modules/defaultComponent'
import { PAGE_BLOCKS } from '../../constants/blocks'
import { Container } from '../../elements/container'
import { PageSection } from '../style';



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
        if(block === undefined) return <ErrorComponent {...block}/>

        const { fieldGroupName, pageBanner } = block

        switch(fieldGroupName){
            case BANNER:
                return <Banner {...pageBanner}/>;
            default:
                return <ErrorComponent {...page}/>
        }
    }


    //if blocks fields exist loop through and render component
    const renderComponent = () =>{
        if(pageBlockFields) {
            return pageBlockFields.map(block => BlockComponent(block))
        }else {
            return <ErrorComponent {...page}/>
        }
        
    }


    return (
        <PageSection>
                {renderComponent()}
        </PageSection>
    )
 

}  


export default Page