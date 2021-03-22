import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { carouselSelector } from './redux/selector'
import { Section, Container } from '../../elements'
import { Card, Carousel } from '../../components'
import Indicators from './indicators'



export const Banner = (props) => {

    const { page: { slug, title } } = props

    //store carousel controls in state
    const [controls, setControls] = useState({})

    //fetch controls from carousel component
    const getControls = data => {
        if(!data) return
        return setControls({...data})
    }


    //page name is store as the carousel reducer name
    const pageName = () => {
        
        return title !== undefined ? title : slug
    }

    //carousel redux state selector
    const carouselState = useSelector(state => carouselSelector(state, pageName()), shallowEqual)
  
    //gatsby image fluid image selector
    const getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid


    //render and handle indicators
    const renderIndicators = () => {
        
        const { data, currentPage, activeIndex, isLoaded } = carouselState

        const handleIndicators = (id) => {
            if(!id) return
            const { setItem } = controls 
            const index = data.findIndex(item => item.id && item.id === id)

            return setItem({
                name: pageName(),
                index
            })
        }

        if(!isLoaded) return


        return < Indicators cards={currentPage} activeIndex={activeIndex} handleIndicator={handleIndicators}/>
    }


    const renderChevrons = () => {}



    const renderCards = () => {
        return props.blocks.map(({pageBanner}, i) => {
                let {  page_banners } = pageBanner
                let card = {
                    ...pageBanner,
                    ...page_banners,
                    fluid: getFluidImage(pageBanner)
                }
                return  <Card {...card} key={`card-${i}-card-module`} justifyContent="end"/>
            })

    }

        
        return (
            <Section key={slug}>
                <Carousel name={pageName()} controls={getControls}>
                    {renderCards()}
                </Carousel>
                <Container>
                    {renderIndicators()}
                </Container>
            </Section>
        )
}

