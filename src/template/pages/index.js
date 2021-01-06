import React from 'react'
import Banner from '../../modules/banner'
import ErrorComponent from '../../modules/defaultComponent'
import { PAGE_BLOCKS } from '../../constants/blocks'
import { Container } from '../../elements/container'
import { PageSection } from '../style';



const Page = ({pageContext:{ page, page: {
    uri,
    title,
    slug,
    id,
    pageBlocks: { pageBlockFields }
}} }) => {

    const { BANNER } = PAGE_BLOCKS


    console.log(page)

    const renderComponent = () =>{
        const blocks = [{
            banners: pageBlockFields.filter(block => block.fieldGroupName === BANNER)
        }]

        console.log(blocks)

        if(pageBlockFields) {
           
        }else {
            return <ErrorComponent {...uri} {...title} {...slug} {...id}/>
        }
        
    }


    return (
        <PageSection>
                {renderComponent()}
        </PageSection>
    )
 

}  


export default Page


/*

    const BlockComponent = (block) => {
        if(block === undefined) return <ErrorComponent {...block}/>

        const { fieldGroupName, pageBanner } = block

        switch(fieldGroupName){
            case BANNER:
                return <Banner {...pageBanner}/>;
            default:
                return <ErrorComponent {...uri} {...title} {...slug} {...id}/>
        }
    }


    */