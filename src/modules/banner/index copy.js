import React, { useState, useEffect } from 'react'
import { Section } from '../../elements'
import { Card, Carousel } from '../../components'
import Indicators from './indicators'

export const Banner = ({ 
  blocks   
}) => {

const getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid
const [controls, setControls] = useState({})

let pageControls = {}

const getCarouselControls = data => {

    return setControls(data.activeIndex)


}


const shouldRenderControls = pageControls.hasOwnProperty("currentPage")

    return (
        <Section key={`banner`}>
            <Carousel controls={getCarouselControls}>
                {blocks.map(({pageBanner}, i) => {
                    let {  page_banners } = pageBanner
                    let card = {
                        ...pageBanner,
                        ...page_banners,
                        fluid: getFluidImage(pageBanner)
                    }
                    return (
                        <Card {...card} key={`card-${i}-card-module`} justifyContent="end"/>
                    )
                })}
            </Carousel>
            
        
        
        </Section>
    )
}



