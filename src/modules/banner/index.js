import React, { useState, useEffect } from 'react'
import { Section } from '../../elements'
import { Card, Carousel } from '../../components'
import Indicators from './indicators'

export class Banner extends React.Component {
    constructor(props){
        super(props);

        this.state = {controls: {}}
    }


    getFluidImage = (banner) => banner.featuredImage.node.localFile.childImageSharp.fluid
    getControls = data => {
        if(data === undefined) return
        
        this.setState({
            controls: {
                ...data
            }
        })
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
                <Carousel controls={this.getControls}>
                    {this.renderCards()}
                </Carousel>
            </Section>
        )
    }
}

