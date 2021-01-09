import React from 'react'
import { Container, Section } from '../../elements'
import { BannerWrapper } from './style'
import { Card } from '../../components'

export const Banner = ({ 
  blocks,
  page   
}) => {

const getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid
    return (
        <Section className="h-screen w-full h-100 relative">
            <BannerWrapper>
                <Container>
                {blocks.map(({pageBanner}, i) => {
                    let {  page_banners } = pageBanner
                    let card = {
                        ...pageBanner,
                        ...page_banners,
                        fluid: getFluidImage(pageBanner)
                    }
                    return <Card {...card} key={`card-${i}-card-module`}/>
                })}
                </Container>
            </BannerWrapper>
            
        </Section>
    )
}



