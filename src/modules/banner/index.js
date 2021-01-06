import React from 'react'
import { Section } from '../../elements'
import { BannerWrapper } from './style'
import { FullScreenImg } from '../../components'

const Banner = ({ 
    featuredImage,
    id,
    pageBanners,
    slug,
    title,
    uri     
}, props) => {

const fluid = featuredImage.node.localFile.childImageSharp.fluid

console.log(fluid)

    return (
        <Section className="h-screen w-full h-100 relative">
            <BannerWrapper >
            <FullScreenImg fluid={fluid}/>
                Page Banner
            </BannerWrapper>
        </Section>
    )
}


export default Banner
