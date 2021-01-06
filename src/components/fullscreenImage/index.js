import React from 'react'
import { Wrapper } from './style/wrapper'
import Img from "gatsby-image"


export const FullScreenImg = ({fluid, alt}) => {
    return (
        <Wrapper>
            <Img 
                fluid={fluid}
                alt={alt}
                className="h-full"
            />
        </Wrapper>
    )
}
