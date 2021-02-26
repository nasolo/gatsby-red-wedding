import React, { useState, useEffect } from 'react'
import { Section, Container } from '../../elements'
import { Card, Carousel } from '../../components'
import Indicators from './indicators'

export class Banner extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    

    pageName = () => "Randy"
  
    getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid
    setSlide = (data) => {




    }
    getControls = data => {
        if(data === undefined) return
        this.setState({
                ...data
        })
    }



    renderIndicators(){
        const {currentPage, activeIndex, controls} = this.state

        if(!this.state.isLoaded) return

        const handleIndicator = (index) => {

            const { setItem } = controls
    
            return controls.setItem({
                name: this.pageName(),
                index
            })
            
        }

        return < Indicators cards={currentPage} activeIndex={activeIndex} handleIndicator={handleIndicator}/>
    }
    renderCards(){
        return this.props.blocks.map(({pageBanner}, i) => {
                let {  page_banners } = pageBanner
                let card = {
                    ...pageBanner,
                    ...page_banners,
                    fluid: this.getFluidImage(pageBanner)
                }
                return  <Card {...card} key={`card-${i}-card-module`} justifyContent="end"/>
            })

    }

    render(){

        return (
            <Section key={`banner`}>
                <Carousel name={this.pageName()} controls={this.getControls}>
                    {this.renderCards()}
                </Carousel>
                <Container>
                    {this.renderIndicators()}
                </Container>
            </Section>
        )
    }
}

