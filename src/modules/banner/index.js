import React, { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { carouselSelector } from './redux/selector'
import { Section, Container } from '../../elements'
import { Card, Carousel } from '../../components'
import Indicators from './indicators'



export const Banner = (props) => {

    const { 
        blocks,
        fieldName,
        page: { slug, title } 
    } = props

    

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
        
        if(blocks === undefined) return <div>Error Component</div>

        const cards = blocks.map((card, i) => 
            <Card {...card} key={`card-${i}-card-module`} justifyContent="end"/>
        )

        return cards


    }

        
        return (
            <Section key={`${slug}-${fieldName}`} bg={`black`}>
                <Carousel name={pageName()} controls={getControls}>
                    {renderCards()}
                </Carousel>
                <Container>
                    {renderIndicators()}
                </Container>
            </Section>
        )
}

