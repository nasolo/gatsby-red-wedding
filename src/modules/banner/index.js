import React from 'react'
import { Container, Section } from '../../elements'
import { BannerWrapper } from './style'
import { Card, Carousel } from '../../components'

export const Banner = ({ 
  blocks   
}) => {

const getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid

    console.log(blocks)

    return (
        <Section className="h-screen w-full h-100 relative">
            <BannerWrapper>
            <Carousel>
                
                    {blocks.map(({pageBanner}, i) => {
                        let {  page_banners } = pageBanner
                        let card = {
                            ...pageBanner,
                            ...page_banners,
                            fluid: getFluidImage(pageBanner)
                        }
                        return <Card {...card} key={`card-${i}-card-module`}/>
                    })}
                    
                    </Carousel>
            </BannerWrapper>
        </Section>
    )
}



