import React from 'react'
import { Wrapper, Body, Heading, Title, SubHeading, Overview } from './style'
import { FullScreenImg } from '../fullscreenImage'
import { Container } from '../../elements'

export const Card = ({
    id, 
    fluid, 
    alt = "The Red Wedding", 
    title, 
    heading, 
    subHeading, 
    overview,
    settings,
    ...rest
}) => {
    return (
        <Wrapper 
            key={`${id}-${title}-card`}
            {...rest}
        >
            <FullScreenImg fluid={fluid} alt={alt} key={`${id}-${title}-img`}/>
                <Body key={`${id}-${title}-body`} >
                    <Heading heading={heading}/>
                    <Title title={title}/>
                    <SubHeading subtitle={subHeading} />
                    <Overview overview={overview} />
                </Body>
            
        </Wrapper>
    )
}